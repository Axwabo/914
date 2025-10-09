using System.Linq;

namespace RecipeExtractor;

public static partial class RecipeTransformer
{

    public static Recipe? GetRecipe(Scp914ItemProcessor processor, ItemType itemType) => processor switch
    {
        AmmoItemProcessor ammo => Ammo(ammo),
        DisruptorItemProcessor => Disruptor(),
        FirearmItemProcessor firearm => Firearm(firearm, itemType),
        MicroHidItemProcessor micro => Micro(micro),
        Scp1344ItemProcessor scp1344 => Scp1344(scp1344),
        // Scp2176ItemProcessor scp2176ItemProcessor => throw new NotImplementedException(),
        // Scp244ItemProcessor scp244ItemProcessor => throw new NotImplementedException(),
        // UsableItemProcessor usableItemProcessor => throw new NotImplementedException(),
        StandardItemProcessor standardItemProcessor => Standard(standardItemProcessor),
        _ => null
    };

    private static Recipe Ammo(AmmoItemProcessor processor) => new()
    {
        {processor._previousAmmo, KnobSettings.Rough | KnobSettings.Coarse},
        {processor._oneToOne, KnobSettings.OneToOne},
        {processor._nextAmmo, KnobSettings.Fine | KnobSettings.VeryFine}
    };

    private static Recipe Standard(StandardItemProcessor standard) => new()
    {
        {standard._roughOutputs, KnobSettings.Rough},
        {standard._coarseOutputs, KnobSettings.Coarse},
        {standard._oneToOneOutputs, KnobSettings.OneToOne},
        {standard._fineOutputs, KnobSettings.Fine},
        {standard._veryFineOutputs, KnobSettings.VeryFine}
    };

    private static Recipe Disruptor() => new()
    {
        {ItemType.Flashlight, KnobSettings.Rough},
        {ItemType.GunE11SR, KnobSettings.Coarse},
        {ItemType.Jailbird, KnobSettings.OneToOne},
        {new RechargeOutput(), KnobSettings.Fine | KnobSettings.VeryFine}
    };

    private static Recipe Firearm(FirearmItemProcessor firearm, ItemType itemType) => new()
    {
        {firearm._roughOutputs, itemType, KnobSettings.Rough},
        {firearm._coarseOutputs, itemType, KnobSettings.Coarse},
        {firearm._oneToOneOutputs, itemType, KnobSettings.OneToOne},
        {firearm._fineOutputs, itemType, KnobSettings.Fine},
        {firearm._veryFineOutputs, itemType, KnobSettings.VeryFine}
    };

    private static Recipe Micro(MicroHidItemProcessor micro)
    {
        var recipe = Standard(micro);
        recipe.Add(new BreakOutput(), KnobSettings.Coarse);
        recipe.Add(new RechargeOutput(), KnobSettings.Fine | KnobSettings.VeryFine);
        return recipe;
    }

    private static Recipe Scp1344(Scp1344ItemProcessor scp1344)
    {
        var recipe = Standard(scp1344);
        recipe.Add(new ItemTypeOutput([new Item(ItemType.GrenadeFlash), new Item(ItemType.Adrenaline)]), KnobSettings.OneToOne);
        recipe.Add(new ItemTypeOutput([new Item(ItemType.Adrenaline, 2), new Item(ItemType.SCP2176)]), KnobSettings.VeryFine);
        return recipe;
    }

    private static void Add(this Recipe recipe, FirearmItemProcessor.FirearmOutput[] outputs, ItemType originalType, KnobSettings setting) => recipe.Add(
        outputs.Length == 0
            ? [new RandomizeAttachmentsOutput()]
            : outputs.Select(e => e.Transform(originalType)).ToList(),
        setting
    );

    private static Output Transform(this FirearmItemProcessor.FirearmOutput output, ItemType originalType) => output.TargetItems switch
    {
        [] => new NothingOutput(output.Chance),
        [var single] when single == originalType => new RandomizeAttachmentsOutput(output.Chance),
        [var single] => ItemTypeOutput.From(single, output.Chance),
        _ => TransformMultiItem(output)
    };

    private static Output TransformMultiItem(FirearmItemProcessor.FirearmOutput output) => new ItemTypeOutput(
        output.TargetItems.GroupBy(e => e)
            .Select(group => new Item(group.Key, group.Count()))
            .ToList(),
        output.Chance
    );

}

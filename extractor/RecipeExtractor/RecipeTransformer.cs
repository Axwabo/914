using System.Linq;
using RecipeExtractor.Extensions;
using Scp914;

namespace RecipeExtractor;

public static class RecipeTransformer
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
        {processor._previousAmmo, Scp914KnobSetting.Rough, Scp914KnobSetting.Coarse},
        {processor._oneToOne, Scp914KnobSetting.OneToOne},
        {processor._nextAmmo, Scp914KnobSetting.Fine, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Standard(StandardItemProcessor standard) => new()
    {
        {standard._roughOutputs, Scp914KnobSetting.Rough},
        {standard._coarseOutputs, Scp914KnobSetting.Coarse},
        {standard._oneToOneOutputs, Scp914KnobSetting.OneToOne},
        {standard._fineOutputs, Scp914KnobSetting.Fine},
        {standard._veryFineOutputs, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Disruptor() => new()
    {
        {ItemType.Flashlight, Scp914KnobSetting.Rough},
        {ItemType.GunE11SR, Scp914KnobSetting.Coarse},
        {ItemType.Jailbird, Scp914KnobSetting.OneToOne},
        {new RechargeOutput(), Scp914KnobSetting.Fine, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Firearm(FirearmItemProcessor firearm, ItemType itemType) => new()
    {
        {firearm._roughOutputs, itemType, Scp914KnobSetting.Rough},
        {firearm._coarseOutputs, itemType, Scp914KnobSetting.Coarse},
        {firearm._oneToOneOutputs, itemType, Scp914KnobSetting.OneToOne},
        {firearm._fineOutputs, itemType, Scp914KnobSetting.Fine},
        {firearm._veryFineOutputs, itemType, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Micro(MicroHidItemProcessor micro)
    {
        var recipe = Standard(micro);
        recipe.Add(new BreakOutput(), Scp914KnobSetting.Coarse);
        recipe.Add(new RechargeOutput(), Scp914KnobSetting.Fine, Scp914KnobSetting.VeryFine);
        return recipe;
    }

    private static Recipe Scp1344(Scp1344ItemProcessor scp1344)
    {
        var recipe = Standard(scp1344);
        recipe.Add(new ItemTypeOutput([new Item(ItemType.GrenadeFlash), new Item(ItemType.Adrenaline)]), Scp914KnobSetting.OneToOne);
        recipe.Add(new ItemTypeOutput([new Item(ItemType.Adrenaline, 2), new Item(ItemType.SCP2176)]), Scp914KnobSetting.VeryFine);
        return recipe;
    }

    private static void Add(this Recipe recipe, FirearmItemProcessor.FirearmOutput[] outputs, ItemType originalType, Scp914KnobSetting setting) => recipe.Add(
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

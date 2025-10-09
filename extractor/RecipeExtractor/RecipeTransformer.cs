using System.Linq;
using RecipeExtractor.Extensions;
using Scp914;

namespace RecipeExtractor;

public static class RecipeTransformer
{

    public static Recipe? GetRecipe(Scp914ItemProcessor processor) => processor switch
    {
        AmmoItemProcessor ammo => Ammo(ammo),
        DisruptorItemProcessor => Disruptor(),
        FirearmItemProcessor firearm => Firearm(firearm),
        // MicroHidItemProcessor microHidItemProcessor => throw new NotImplementedException(),
        // Scp1344ItemProcessor scp1344ItemProcessor => throw new NotImplementedException(),
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
        {RefillAmmoOutput.Certain, Scp914KnobSetting.Fine, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Firearm(FirearmItemProcessor firearm) => new()
    {
        {firearm._roughOutputs, Scp914KnobSetting.Rough},
        {firearm._coarseOutputs, Scp914KnobSetting.Coarse},
        {firearm._oneToOneOutputs, Scp914KnobSetting.OneToOne},
        {firearm._fineOutputs, Scp914KnobSetting.Fine},
        {firearm._veryFineOutputs, Scp914KnobSetting.VeryFine}
    };

    private static void Add(this Recipe recipe, IEnumerable<FirearmItemProcessor.FirearmOutput> outputs, Scp914KnobSetting setting)
        => recipe.Add(outputs.Select(Transform).ToList(), setting);

    private static Output Transform(this FirearmItemProcessor.FirearmOutput output)
    {
        switch (output.TargetItems)
        {
            case [var single]:
                return ItemTypeOutput.From(single, output.Chance);
            case []:
                return new DestroyOutput(output.Chance);
            default:
                // TODO
                return RefillAmmoOutput.Certain;
        }
    }

}

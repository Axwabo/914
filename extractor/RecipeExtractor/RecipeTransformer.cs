using RecipeExtractor.Extensions;
using Scp914;

namespace RecipeExtractor;

public static class RecipeTransformer
{

    public static Recipe? GetRecipe(Scp914ItemProcessor processor) => processor switch
    {
        AmmoItemProcessor ammoItemProcessor => Ammo(ammoItemProcessor),
        // DisruptorItemProcessor disruptorItemProcessor => throw new NotImplementedException(),
        // FirearmItemProcessor firearmItemProcessor => throw new NotImplementedException(),
        // MicroHidItemProcessor microHidItemProcessor => throw new NotImplementedException(),
        // Scp1344ItemProcessor scp1344ItemProcessor => throw new NotImplementedException(),
        // Scp2176ItemProcessor scp2176ItemProcessor => throw new NotImplementedException(),
        // Scp244ItemProcessor scp244ItemProcessor => throw new NotImplementedException(),
        // UsableItemProcessor usableItemProcessor => throw new NotImplementedException(),
        StandardItemProcessor standardItemProcessor => Standard(standardItemProcessor),
        _ => null
    };

    private static Recipe Standard(StandardItemProcessor standard) => new()
    {
        {standard._roughOutputs, Scp914KnobSetting.Rough},
        {standard._coarseOutputs, Scp914KnobSetting.Coarse},
        {standard._oneToOneOutputs, Scp914KnobSetting.OneToOne},
        {standard._fineOutputs, Scp914KnobSetting.Fine},
        {standard._veryFineOutputs, Scp914KnobSetting.VeryFine}
    };

    private static Recipe Ammo(AmmoItemProcessor processor) => new()
    {
        {processor._previousAmmo, 1, Scp914KnobSetting.Rough, Scp914KnobSetting.Coarse},
        {processor._oneToOne, 1, Scp914KnobSetting.OneToOne},
        {processor._nextAmmo, 1, Scp914KnobSetting.Fine, Scp914KnobSetting.VeryFine}
    };

}

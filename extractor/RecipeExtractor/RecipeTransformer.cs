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
        Scp2176ItemProcessor scp2176 => Scp2176(scp2176),
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
        {RechargeOutput.Certain, KnobSettings.Fine | KnobSettings.VeryFine}
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
        recipe.Add(BreakOutput.Certain, KnobSettings.Coarse);
        recipe.Add(RechargeOutput.Certain, KnobSettings.Fine | KnobSettings.VeryFine);
        return recipe;
    }

    private static Recipe Scp1344(Scp1344ItemProcessor scp1344)
    {
        var recipe = Standard(scp1344);
        recipe.Add(new ItemOutput([new OutputItem(ItemType.GrenadeFlash), new OutputItem(ItemType.Adrenaline)]), KnobSettings.OneToOne);
        recipe.Add(new ItemOutput([new OutputItem(ItemType.Adrenaline, 2), new OutputItem(ItemType.SCP2176)]), KnobSettings.VeryFine);
        return recipe;
    }

    private static Recipe Scp2176(Scp2176ItemProcessor scp2176)
    {
        var recipe = Standard(scp2176);
        recipe.Add(BreakOutput.Certain, KnobSettings.Rough);
        recipe.Add(ItemType.Coin, (int) Scp2176ItemProcessor.NumOfCoins, KnobSettings.OneToOne);
        recipe.Add([
            new NothingOutput(1d - Scp2176ItemProcessor.FlashlightChance),
            ItemOutput.Count(ItemType.Flashlight, (int) Scp2176ItemProcessor.NumOfFlashlights, Scp2176ItemProcessor.FlashlightChance)
        ], KnobSettings.VeryFine);
        return recipe;
    }

}

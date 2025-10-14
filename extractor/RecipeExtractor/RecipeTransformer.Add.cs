using System.Linq;

namespace RecipeExtractor;

public static partial class RecipeTransformer
{

    private static void Add(this Recipe recipe, ItemType type, KnobSettings settings)
        => recipe.Add(ItemOutput.Single(type), settings);

    private static void Add(this Recipe recipe, ItemType type, int count, KnobSettings settings)
        => recipe.Add(ItemOutput.Count(type, count), settings);

    private static void Add(this Recipe recipe, ItemType[] outputs, KnobSettings settings)
    {
        var list = new List<Output>();
        double total = outputs.Length;
        foreach (var group in outputs.GroupBy(e => e))
            list.Add(ItemOutput.Single(group.Key, group.Count() / total));
        if (list.Count != 0)
            recipe.Add(list, settings);
    }

    private static void Add(this Recipe recipe, Output output, KnobSettings settings)
        => recipe[settings] = [output];

    private static void Add(this Recipe recipe, List<Output> outputs, KnobSettings settings)
        => recipe[settings] = outputs;

    private static void Add(this Recipe recipe, FirearmItemProcessor.FirearmOutput[] outputs, ItemType originalType, KnobSettings settings) => recipe.Add(
        outputs.Length == 0
            ? [new RandomizeAttachmentsOutput()]
            : outputs.Select(e => e.Transform(originalType)).ToList(),
        settings
    );

    private static Output Transform(this FirearmItemProcessor.FirearmOutput output, ItemType originalType) => output.TargetItems switch
    {
        [] => new NothingOutput(output.Chance),
        [var single] when single == originalType => new RandomizeAttachmentsOutput(output.Chance),
        [var single] => ItemOutput.Single(single, output.Chance),
        _ => TransformMultiItem(output)
    };

    private static Output TransformMultiItem(FirearmItemProcessor.FirearmOutput output) => new ItemOutput(
        output.TargetItems.GroupBy(e => e)
            .Select(group => new OutputItem(group.Key, group.Count()))
            .ToList(),
        output.Chance
    );

}

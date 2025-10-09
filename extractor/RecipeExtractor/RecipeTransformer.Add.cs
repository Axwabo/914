using System.Linq;

namespace RecipeExtractor;

public static partial class RecipeTransformer
{

    public static void Add(this Recipe recipe, ItemType type, KnobSettings settings)
        => recipe.Add(ItemTypeOutput.From(type), settings);

    public static void Add(this Recipe recipe, ItemType[] outputs, KnobSettings setting)
    {
        var list = new List<Output>();
        double total = outputs.Length;
        foreach (var group in outputs.GroupBy(e => e))
            list.Add(ItemTypeOutput.From(group.Key, group.Count() / total));
        if (list.Count != 0)
            recipe.Add(list, setting);
    }

    public static void Add(this Recipe recipe, Output output, KnobSettings settings)
        => recipe[settings] = [output];

    public static void Add(this Recipe recipe, List<Output> outputs, KnobSettings setting)
        => recipe[setting] = outputs;

}

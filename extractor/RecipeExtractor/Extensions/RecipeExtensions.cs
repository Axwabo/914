using System.Linq;
using Scp914;

namespace RecipeExtractor.Extensions;

public static class RecipeExtensions
{

    public static void Add(this Recipe recipe, ItemType type, params Scp914KnobSetting[] settings)
        => recipe.Add(ItemTypeOutput.From(type), settings);

    public static void Add(this Recipe recipe, ItemType[] outputs, Scp914KnobSetting setting)
    {
        var list = new List<Output>();
        double total = outputs.Length;
        foreach (var group in outputs.GroupBy(e => e))
            list.Add(ItemTypeOutput.From(group.Key, group.Count() / total));
        recipe.Add(list, setting);
    }

    public static void Add(this Recipe recipe, Output output, params Scp914KnobSetting[] settings)
        => recipe[(settings)] = [output];

    public static void Add(this Recipe recipe, List<Output> outputs, Scp914KnobSetting setting)
        => recipe[setting] = outputs;

}

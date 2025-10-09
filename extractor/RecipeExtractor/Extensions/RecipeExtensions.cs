using System.Linq;
using Scp914;

namespace RecipeExtractor.Extensions;

public static class RecipeExtensions
{

    public static void Add(this Recipe recipe, ItemType type, double chance, params Scp914KnobSetting[] settings)
        => recipe[new KnobSettingList(settings)] = [new ItemTypeOutput(type, chance)];

    public static void Add(this Recipe recipe, ItemType[] outputs, Scp914KnobSetting setting)
    {
        var list = new List<Output>();
        double total = outputs.Length;
        foreach (var group in outputs.GroupBy(e => e))
            list.Add(new ItemTypeOutput(group.Key, group.Count() / total));
        recipe[new KnobSettingList(setting)] = list;
    }

}

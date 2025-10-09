using System.Linq;
using Scp914;

namespace RecipeExtractor.Extensions;

public static class RecipeExtensions
{

    public static void Add(this Recipe recipe, ItemType type, params Scp914KnobSetting[] settings)
        => recipe[new KnobSettingList(settings)] = [ItemTypeOutput.From(type)];

    public static void Add(this Recipe recipe, ItemType[] outputs, Scp914KnobSetting setting)
    {
        var list = new List<Output>();
        double total = outputs.Length;
        foreach (var group in outputs.GroupBy(e => e))
            list.Add(ItemTypeOutput.From(group.Key, group.Count() / total));
        recipe[new KnobSettingList(setting)] = list;
    }

}

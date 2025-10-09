using System.Linq;
using Scp914;

namespace RecipeExtractor.Extensions;

public static class EnumExtensions
{

    public static string FriendlyName(this Scp914KnobSetting value) => value switch
    {
        Scp914KnobSetting.Rough => "Rough",
        Scp914KnobSetting.Coarse => "Coarse",
        Scp914KnobSetting.OneToOne => "1:1",
        Scp914KnobSetting.Fine => "Fine",
        Scp914KnobSetting.VeryFine => "Very Fine",
        _ => throw new ArgumentOutOfRangeException(nameof(value), value, null)
    };

    public static List<Item> GroupAsItems(this IEnumerable<ItemType> items)
        => items.GroupBy(e => e)
            .Select(group => new Item(group.Key, group.Count()))
            .ToList();

}

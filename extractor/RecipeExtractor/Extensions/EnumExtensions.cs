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

}

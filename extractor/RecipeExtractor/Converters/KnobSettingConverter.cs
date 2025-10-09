using Scp914;

namespace RecipeExtractor.Converters;

public sealed class KnobSettingConverter : WriteOnlyJsonConverter<Scp914KnobSetting>
{

    public override void Write(Utf8JsonWriter writer, Scp914KnobSetting value, JsonSerializerOptions options) => JsonSerializer.Serialize(writer, value switch
    {
        Scp914KnobSetting.Rough => "Rough",
        Scp914KnobSetting.Coarse => "Coarse",
        Scp914KnobSetting.OneToOne => "1:1",
        Scp914KnobSetting.Fine => "Fine",
        Scp914KnobSetting.VeryFine => "Very Fine",
        _ => throw new ArgumentOutOfRangeException(nameof(value), value, null)
    }, options);

}

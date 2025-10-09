using RecipeExtractor.Extensions;
using Scp914;

namespace RecipeExtractor.Converters;

public sealed class KnobSettingConverter : WriteOnlyJsonConverter<Scp914KnobSetting>
{

    public override void Write(Utf8JsonWriter writer, Scp914KnobSetting value, JsonSerializerOptions options)
        => writer.WriteStringValue(value.FriendlyName());

}

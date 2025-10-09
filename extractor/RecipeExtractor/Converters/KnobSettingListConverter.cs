using System.Linq;
using RecipeExtractor.Extensions;

namespace RecipeExtractor.Converters;

public sealed class KnobSettingListConverter : WriteOnlyJsonConverter<KnobSettingList>
{

    public override void Write(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => JsonSerializer.Serialize(writer, Join(value), options);

    public override void WriteAsPropertyName(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => writer.WritePropertyName(Join(value));

    private static string Join(KnobSettingList value) => string.Join(",", value.Settings.Select(EnumExtensions.FriendlyName));

}

namespace RecipeExtractor.Converters;

public sealed class KnobSettingListConverter : WriteOnlyJsonConverter<KnobSettingList>
{

    public override void Write(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => writer.WriteStringValue(value.ToString());

    public override void WriteAsPropertyName(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => writer.WritePropertyName(value.ToString());

}

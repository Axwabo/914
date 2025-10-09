namespace RecipeExtractor.Converters;

public sealed class KnobSettingListConverter : WriteOnlyJsonConverter<KnobSettingList>
{

    public override void Write(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => JsonSerializer.Serialize(writer, string.Join(",", value.Settings), options);

    public override void WriteAsPropertyName(Utf8JsonWriter writer, KnobSettingList value, JsonSerializerOptions options)
        => writer.WritePropertyName(string.Join(",", value.Settings));

}

namespace RecipeExtractor.Converters;

public sealed class ChanceConverter : WriteOnlyJsonConverter<Chance>
{

    public override void Write(Utf8JsonWriter writer, Chance value, JsonSerializerOptions options)
        => writer.WriteNumberValue(value.Value);

}

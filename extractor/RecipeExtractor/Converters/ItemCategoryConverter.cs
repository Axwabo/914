namespace RecipeExtractor.Converters;

public sealed class ItemCategoryConverter : JsonConverter<ItemCategory>
{

    public override ItemCategory Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException();

    public override void Write(Utf8JsonWriter writer, ItemCategory value, JsonSerializerOptions options)
        => writer.WriteStringValue(Translate(value));

    public override void WriteAsPropertyName(Utf8JsonWriter writer, ItemCategory value, JsonSerializerOptions options)
        => writer.WritePropertyName(Translate(value));

    private static string Translate(ItemCategory value) => value switch
    {
        ItemCategory.SCPItem => "SCP Item",
        ItemCategory.SpecialWeapon => "Special Weapon",
        _ => value.ToString()
    };

}

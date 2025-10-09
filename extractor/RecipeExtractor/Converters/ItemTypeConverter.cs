using InventorySystem.Items;

namespace RecipeExtractor.Converters;

public sealed class ItemTypeConverter : WriteOnlyJsonConverter<ItemType>
{

    public override void Write(Utf8JsonWriter writer, ItemType value, JsonSerializerOptions options)
        => writer.WriteStringValue(value.GetName());

    public override void WriteAsPropertyName(Utf8JsonWriter writer, ItemType value, JsonSerializerOptions options)
        => writer.WritePropertyName(value.GetName());

}

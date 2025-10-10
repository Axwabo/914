using InventorySystem.Items;

namespace RecipeExtractor;

public sealed class ItemTypeConverter : JsonConverter<ItemType>
{

    public override ItemType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        => throw new NotSupportedException();

    public override void Write(Utf8JsonWriter writer, ItemType value, JsonSerializerOptions options)
        => writer.WriteStringValue(Translate(value));

    public override void WriteAsPropertyName(Utf8JsonWriter writer, ItemType value, JsonSerializerOptions options)
        => writer.WritePropertyName(Translate(value));

    private static string Translate(ItemType value) => value switch
    {
        ItemType.Ammo12gauge => "12/70 Buckshot Ammo",
        ItemType.Ammo556x45 => "5.56x45mm Ammo",
        ItemType.Ammo44cal => ".44 Mag Ammo",
        ItemType.Ammo762x39 => "7.62x39mm Ammo",
        ItemType.Ammo9x19 => "9x19mm Ammo",
        _ => value.GetName()
    };

}

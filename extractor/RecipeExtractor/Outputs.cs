using System.Text.Json.Serialization;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

public sealed record Item(ItemType Type, int Count = 1);

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
[JsonDerivedType(typeof(RandomizeAttachmentsOutput), "randomize")]
[JsonDerivedType(typeof(RechargeOutput), "recharge")]
[JsonDerivedType(typeof(BreakOutput), "break")]
public abstract record Output(double Chance = 1);

public sealed record ItemTypeOutput(List<Item> Items, double Chance = 1) : Output(Chance)
{

    public static Output From(ItemType type, double chance = 1)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemTypeOutput([new Item(type)], chance);

}

public sealed record DestroyOutput(double Chance = 1) : Output(Chance);

public sealed record RandomizeAttachmentsOutput(double Chance = 1) : Output(Chance);

public sealed record RechargeOutput : Output;

public sealed record BreakOutput : Output;

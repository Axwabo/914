using System.Text.Json.Serialization;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
[JsonDerivedType(typeof(MultiItemOutput), "multipleItems")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
[JsonDerivedType(typeof(RefillAmmoOutput), "refill")]
[JsonDerivedType(typeof(RechargeOutput), "recharge")]
public abstract record Output(float Chance);

public sealed record ItemTypeOutput(ItemType Item, float Chance = 1) : Output(Chance)
{

    public static Output From(ItemType type, float chance = 1)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemTypeOutput(type, chance);

}

public sealed record MultiItemOutput(float Chance = 1) : Output(Chance);

public sealed record DestroyOutput(float Chance = 1) : Output(Chance)
{

    public static DestroyOutput Certain { get; } = new();

}

public sealed record RefillAmmoOutput(float Chance = 1) : Output(Chance)
{

    public static RefillAmmoOutput Certain { get; } = new();

}

public sealed record RechargeOutput(float Chance = 1) : Output(Chance)
{

    public static RechargeOutput Certain { get; } = new();

}

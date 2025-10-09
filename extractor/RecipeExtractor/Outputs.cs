using System.Text.Json.Serialization;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
public abstract record Output(double Chance);

public sealed record ItemTypeOutput(ItemType Item, double Chance = 1) : Output(Chance)
{

    public static Output From(ItemType type, double chance = 1)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemTypeOutput(type, chance);

}

public sealed record DestroyOutput(double Chance) : Output(Chance);

using System.Text.Json.Serialization;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
public abstract record Output(Chance? Chance);

public sealed record ItemTypeOutput(ItemType Item, Chance? Chance = null) : Output(Chance)
{

    public static Output From(ItemType type, Chance? chance = null)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemTypeOutput(type, chance);

}

public sealed record DestroyOutput(Chance? Chance) : Output(Chance);

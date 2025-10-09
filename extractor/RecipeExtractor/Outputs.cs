using System.Text.Json.Serialization;

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
public abstract record Output(double Chance);

public sealed record ItemTypeOutput(ItemType Type, double Chance) : Output(Chance)
{

    public static Output From(ItemType type, double chance) => type == ItemType.None ? new DestroyOutput(chance) : new ItemTypeOutput(type, chance);

}

public sealed record DestroyOutput(double Chance) : Output(Chance);

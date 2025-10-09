using System.Text.Json.Serialization;

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemTypeOutput), "item")]
public abstract record Output(double Chance);

public sealed record ItemTypeOutput(ItemType Type, double Chance) : Output(Chance);

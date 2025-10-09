namespace RecipeExtractor;

public readonly record struct Chance(double Value)
{

    public static implicit operator Chance(double value) => new(value);

}

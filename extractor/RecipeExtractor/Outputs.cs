// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

public sealed record OutputItem(ItemType Type, int Count = 1);

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind")]
[JsonDerivedType(typeof(ItemOutput), "item")]
[JsonDerivedType(typeof(DestroyOutput), "destroy")]
[JsonDerivedType(typeof(RandomizeAttachmentsOutput), "randomize")]
[JsonDerivedType(typeof(RechargeOutput), "recharge")]
[JsonDerivedType(typeof(BreakOutput), "break")]
[JsonDerivedType(typeof(ShatterOutput), "shatter")]
[JsonDerivedType(typeof(NothingOutput), "nothing")]
public abstract record Output(double Chance = 1);

public sealed record ItemOutput(List<OutputItem> Items, double Chance = 1) : Output(Chance)
{

    public static Output Single(ItemType type, double chance = 1)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemOutput([new OutputItem(type)], chance);

    public static Output Count(ItemType type, int count, double chance = 1)
        => type == ItemType.None
            ? new DestroyOutput(chance)
            : new ItemOutput([new OutputItem(type, count)], chance);

}

public sealed record DestroyOutput(double Chance = 1) : Output(Chance);

public sealed record RandomizeAttachmentsOutput(double Chance = 1) : Output(Chance);

public sealed record RechargeOutput : Output
{

    public static RechargeOutput Certain { get; } = new();

}

public sealed record BreakOutput : Output
{

    public static BreakOutput Certain { get; } = new();

}

public sealed record ShatterOutput : Output
{

    public static ShatterOutput Certain { get; } = new();

}

public sealed record NothingOutput(double Chance) : Output(Chance);

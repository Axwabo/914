using Interactables.Interobjects.DoorUtils;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

[JsonDerivedType(typeof(Ammo))]
[JsonDerivedType(typeof(Keycard))]
[JsonDerivedType(typeof(SingleUseKeycard))]
[JsonDerivedType(typeof(FirearmItem))]
public record Item(ItemCategory Category, string? Description);

public sealed record Ammo(int UnitPrice, string? Description) : Item(ItemCategory.Ammo, Description);

public sealed record Keycard(int ContainmentLevel, int ArmoryLevel, int AdminLevel, string? Description) : Item(ItemCategory.Keycard, Description);

public sealed record SingleUseKeycard(DoorPermissionFlags Permissions, string? Description) : Item(ItemCategory.Keycard, Description);

public sealed record FirearmItem(int MagSize, ItemCategory Category, string? Description) : Item(Category, Description);

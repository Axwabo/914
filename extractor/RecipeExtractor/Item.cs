using Interactables.Interobjects.DoorUtils;

// ReSharper disable NotAccessedPositionalProperty.Global

namespace RecipeExtractor;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "kind", UnknownDerivedTypeHandling = JsonUnknownDerivedTypeHandling.FallBackToBaseType)]
[JsonDerivedType(typeof(Ammo), "ammo")]
[JsonDerivedType(typeof(SingleUseKeycard), "keycard")]
[JsonDerivedType(typeof(FirearmItem), "firearm")]
public record Item(ItemCategory Category, string? Description);

public sealed record Ammo(int UnitPrice, ushort RoundsPerMag, string? Description) : Item(ItemCategory.Ammo, Description);

public sealed record SingleUseKeycard(DoorPermissionFlags Permissions, string? Description) : Item(ItemCategory.Keycard, Description);

public sealed record FirearmItem(int MagSize, ItemCategory Category, string? Description) : Item(Category, Description);

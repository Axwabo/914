using System.Linq;
using InventorySystem.Items;
using InventorySystem.Items.Firearms;
using InventorySystem.Items.Firearms.Ammo;
using InventorySystem.Items.Firearms.Modules;
using InventorySystem.Items.Keycards;

namespace RecipeExtractor;

public static class ItemTransformer
{

    public static Item Transform(ItemBase item)
    {
        var description = item.ItemTypeId.GetDescription();
        if (string.IsNullOrEmpty(description))
            description = null;
        return item switch
        {
            AmmoItem ammo => new Ammo(ammo.UnitPrice, description),
            SingleUseKeycardItem singleUseKeycard => new SingleUseKeycard(singleUseKeycard._singleUsePermissions, description),
            KeycardItem keycard => TransformKeycard(keycard, description),
            Firearm firearm => new FirearmItem(firearm.Modules.OfType<IPrimaryAmmoContainerModule>().First().AmmoMax, item.Category, description),
            _ => new Item(item.Category, description)
        };
    }

    private static Keycard TransformKeycard(KeycardItem keycard, string? description)
    {
        var detail = keycard.Details.OfType<PredefinedPermsDetail>().FirstOrDefault();
        return detail == null
            ? new Keycard(0, 0, 0, description)
            : new Keycard(detail._containmentLevel, detail._armoryLevel, detail._adminLevel, description);
    }

}

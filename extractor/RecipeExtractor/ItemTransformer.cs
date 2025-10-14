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
            AmmoItem {PickupDropModel: AmmoPickup pickup} ammo => new Ammo(ammo.UnitPrice, pickup.SavedAmmo, description),
            AmmoItem ammo => new Ammo(ammo.UnitPrice, 1, description),
            SingleUseKeycardItem singleUseKeycard => new SingleUseKeycard(singleUseKeycard._singleUsePermissions, description),
            Firearm firearm => new FirearmItem(firearm.Modules.OfType<IPrimaryAmmoContainerModule>().First().AmmoMax, item.Category, description),
            _ => new Item(item.Category, description)
        };
    }

}

import itemsRaw from "./assets/data/items.json";
import recipesRaw from "./assets/data/recipes.json";
import type { Item, ItemType } from "./types/item.ts";
import type { ObtainingMethod, Output, UpgradeMode } from "./types/outputs.ts";

export const recipes = recipesRaw as Record<ItemType, Partial<Record<UpgradeMode, Output[]>>>;

export const items = itemsRaw as Record<ItemType, Item>;

export const obtaining = Object.freeze(computeObtaining());

type ObtainingDictionary = Partial<Record<ItemType, ObtainingMethod[]>>;

export function getObtainingMethods(from: ItemType, to: ItemType) {
    return obtaining[to]?.filter(e => e.from === from) ?? [];
}

function computeObtaining(): ObtainingDictionary {
    const record: ObtainingDictionary = {};
    for (const itemKey in recipes) {
        const itemType = itemKey as ItemType;
        const modes = recipes[itemType];
        for (const modeKey in modes) {
            const mode = modeKey as UpgradeMode;
            for (const output of modes[mode] ?? []) {
                if (output.kind !== "item")
                    continue;
                for (const item of output.items) {
                    const array = record[item.type] ??= [];
                    array.push({
                        from: itemType,
                        mode,
                        chance: output.chance
                    });
                }
            }
        }
    }
    return record;
}

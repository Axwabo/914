import itemsRaw from "./assets/data/items.json";
import recipesRaw from "./assets/data/recipes.json";
import type { Item, ItemType } from "./types/item.ts";
import type { ObtainingMethod, Output } from "./types/outputs.ts";

export const recipes = recipesRaw as Record<ItemType, Record<string, Output[]>>;

export const items = itemsRaw as Record<ItemType, Item>;

export const obtaining = Object.freeze(computeObtaining());

type ObtainingDictionary = Partial<Record<ItemType, ObtainingMethod[]>>;

function computeObtaining(): ObtainingDictionary {
    const record: ObtainingDictionary = {};
    for (const itemType of Object.keys(recipes)) {
        const modes = recipes[itemType];
        for (const mode of Object.keys(modes)) {
            for (const output of modes[mode]) {
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

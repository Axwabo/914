import { itemImages, type ItemType } from "../types/item.ts";

export const itemTypes = Object.freeze(Object.keys(itemImages) as ItemType[]);

export function keys<K extends keyof any>(record: Partial<Record<K, any>>): K[] {
    return Object.keys(record) as K[];
}

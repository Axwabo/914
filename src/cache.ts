import recipesRaw from "./assets/data/recipes.json";
import type { ItemType } from "./types/item.ts";
import type { Output } from "./types/outputs.ts";

export const recipes = recipesRaw as Record<ItemType, Record<string, Output[]>>;

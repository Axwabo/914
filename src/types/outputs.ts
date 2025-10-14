import type { Item, ItemType } from "./item.ts";

export type OutputKind = Extract<Output, { type: string }>["type"];

export type Output = { chance: number } & (
    ItemOutput
    | KindOutput<"destroy">
    | KindOutput<"randomize">
    | KindOutput<"recharge">
    | KindOutput<"break">
    | KindOutput<"nothing">);

interface ItemOutput {
    kind: "item";
    items: Item[];
}

interface KindOutput<T extends string> {
    kind: T;
}

export interface ObtainingMethod {
    from: ItemType;
    mode: string;
    chance: number;
}

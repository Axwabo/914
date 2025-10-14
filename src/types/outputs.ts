import type { ItemType } from "./item.ts";

export type Output = { chance: number } & (
    ItemOutput
    | KindOutput<"destroy">
    | KindOutput<"randomize">
    | KindOutput<"recharge">
    | KindOutput<"break">
    | KindOutput<"nothing">);

interface ItemOutput {
    kind: "item";
    items: OutputItem[];
}

interface KindOutput<T extends string> {
    kind: T;
}

export interface OutputItem {
    type: ItemType;
    count: number;
}

export interface ObtainingMethod {
    from: ItemType;
    mode: string;
    chance: number;
}

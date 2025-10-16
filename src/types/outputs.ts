import type { ItemType } from "./item.ts";

export type Output = { chance: number } & (
    ItemOutput
    | KindOutput<"destroy">
    | KindOutput<"randomize">
    | KindOutput<"recharge">
    | KindOutput<"break">
    | KindOutput<"shatter">
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

export type UpgradeMode = "Rough" | "Coarse" | "1:1" | "Fine" | "Very Fine" | "Rough, Coarse" | "Fine, Very Fine";

export interface ObtainingMethod {
    from: ItemType;
    mode: UpgradeMode;
    chance: number;
}

import type { Item } from "./item.ts";

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

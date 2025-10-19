import { obtaining } from "../cache.ts";
import type { ItemType } from "../types/item.ts";
import type { ObtainingMethod } from "../types/outputs.ts";
import { allPaths } from "./graph.ts";

type UpgradePath = ObtainingMethod[];

export function findPath(from: ItemType, to: ItemType): UpgradePath | null {
    const paths = allPaths[from];
    let step = paths[to];
    const stack: UpgradePath = [];
    let next = to;
    while (step?.predecessor !== from) {
        if (!step || !step.predecessor || !isFinite(step.distance))
            return null;
        stack.push(highestChanceMethod(step.predecessor, next));
        next = step.predecessor;
        step = paths[step.predecessor];
    }
    stack.push(highestChanceMethod(from, next));
    stack.reverse();
    return stack;
}

function highestChanceMethod(from: ItemType, to: ItemType): ObtainingMethod {
    return obtaining[to]!.filter(e => e.from === from).sort((a, b) => a.chance - b.chance)[0];
}

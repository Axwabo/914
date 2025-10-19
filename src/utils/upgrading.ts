import type { ItemType } from "../types/item.ts";
import type { UpgradeMode } from "../types/outputs.ts";
import { allPaths } from "./graph.ts";

interface UpgradeNode {
    from: ItemType;
    to: ItemType;
    mode: UpgradeMode;
    chance: number;
}

type UpgradePath = UpgradeNode[];

export function findPath(from: ItemType, to: ItemType): UpgradePath | null {
    const paths = allPaths[from];
    let step = paths[to];
    const stack: UpgradePath = [];
    let previous = to;
    while (step?.predecessor !== from) {
        if (!step || !step.predecessor || !isFinite(step.distance))
            return null;
        stack.push({ from: step.predecessor, to: previous, mode: "1:1", chance: 1 });
        previous = step.predecessor;
        step = paths[step.predecessor];
    }
    stack.push({ from, to: previous, mode: "1:1", chance: 1 });
    stack.reverse();
    return stack;
}

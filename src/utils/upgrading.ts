import { getObtainingMethods } from "../cache.ts";
import type { ItemType } from "../types/item.ts";
import type { ObtainingMethod, UpgradeMode } from "../types/outputs.ts";
import { allPaths, type DijkstraNavigation } from "./graph.ts";
import { keys } from "./keys.ts";

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

function closest(navigation: DijkstraNavigation): ItemType | undefined {
    return keys(navigation)
        .map(e => ({ from: e, distance: navigation[e]!.distance }))
        .filter(e => e.distance && isFinite(e.distance))
        .sort((a, b) => a.distance - b.distance)
        [0]?.from;
}

function highestChanceMethod(from: ItemType, to: ItemType): ObtainingMethod {
    const sorted = getObtainingMethods(from, to).sort((a, b) => b.chance - a.chance);
    const first = sorted[0];
    const sameChance = sorted.filter(e => e.chance === first.chance);
    return {
        from,
        chance: sameChance.reduce((prev, curr) => prev + curr.chance, 0) / sameChance.length,
        mode: sameChance.map(e => e.mode).join(", ") as UpgradeMode
    };
}

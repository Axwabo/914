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
    const paths = allPaths[to];
    let step = paths[from];
    if (!step || isFinite(step.distance))
        return null;
    // TODO: trace steps
    return [];
}

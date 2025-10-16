import { recipes } from "../cache.ts";
import type { ItemType } from "../types/item.ts";

import type { UpgradeMode } from "../types/outputs.ts";

type UpgradeStep = `${ ItemType } -> ${ UpgradeMode } -> ${ ItemType }`;

type UpgradeTree = Partial<Record<UpgradeStep, UpgradeNode>>;

interface UpgradeNode {
    from: ItemType;
    mode: UpgradeMode;
    chance: number;
    nodes: UpgradeTree;
}

export default function findUpgradePath(from: ItemType, to: ItemType) {
    const set = new Set<UpgradeStep>();
    const tree: UpgradeTree = {};
    addUpgradePaths(from, tree, set);
    return tree;
}

function addUpgradePaths(from: ItemType, tree: UpgradeTree, visited: Set<UpgradeStep>) {
    const outputs = recipes[from];
    for (const modeKey in outputs) {
        const mode = modeKey as UpgradeMode;
        for (const output of outputs[mode] ?? []) {
            if (output.kind !== "item")
                continue;
            const chance = output.chance;
            for (const item of output.items) {
                const step: UpgradeStep = `${ from } -> ${ mode } -> ${ item.type }`;
                if (visited.has(step))
                    continue;
                const nodes: UpgradeTree = {};
                tree[step] = {
                    chance,
                    from: item.type,
                    mode,
                    nodes
                };
                addUpgradePaths(item.type, nodes, visited);
            }
        }
    }
}

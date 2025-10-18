import { recipes } from "../cache.ts";
import type { ItemType } from "../types/item.ts";
import type { UpgradeMode } from "../types/outputs.ts";
import { keys } from "./keys.ts";

type UpgradeStep = `${ItemType} -> ${UpgradeMode} -> ${ItemType}`;

type UpgradeTree = Partial<Record<UpgradeStep, UpgradeNode>>;

type UpgradePath = UpgradeNode[];

interface UpgradeNode {
    from: ItemType;
    to: ItemType;
    mode: UpgradeMode;
    chance: number;
    nodes: UpgradeTree;
}

export function findUpgradePaths(from: ItemType, to: ItemType) {
    const tree: UpgradeTree = {};
    const paths: UpgradePath[] = [];
    addUpgradeGraph(from, to, tree);
    mapUpgradePaths(tree, paths);
    for (let i = paths.length - 1; i >= 0; i--) {
        const path = paths[i];
        if (path[path.length - 1].to !== to)
            paths.splice(i, 1);
    }
    return paths;
}

function addUpgradeGraph(from: ItemType, to: ItemType, tree: UpgradeTree, visited?: Set<UpgradeStep>) {
    const outputs = recipes[from];
    for (const mode of keys(outputs)) {
        for (const output of outputs[mode] ?? []) {
            if (output.kind !== "item")
                continue;
            const chance = output.chance;
            for (const item of output.items) {
                if (item.type === from)
                    continue;
                const step: UpgradeStep = `${from} -> ${mode} -> ${item.type}`;
                if (visited?.has(step))
                    continue;
                visited?.add(step);
                const nodes: UpgradeTree = {};
                tree[step] = {
                    chance,
                    from,
                    to: item.type,
                    mode,
                    nodes
                };
                if (item.type !== to)
                    addUpgradeGraph(item.type, to, nodes, visited ?? new Set());
            }
        }
    }
}

function mapUpgradePaths(tree: UpgradeTree, paths: UpgradePath[]) {
    for (const step of keys(tree)) {
        const root = tree[step]!;
        mapUpgradePathsRecursive(root, paths, [ root ]);
    }
}

function mapUpgradePathsRecursive(node: UpgradeNode, paths: UpgradePath[], current: UpgradePath) {
    const nodeKeys = keys(node.nodes);
    if (!nodeKeys.length) {
        paths.push(current);
        return;
    }

    for (const step of nodeKeys)
        mapUpgradePathsRecursive(node.nodes[step]!, paths, [ ...current, node.nodes[step]! ]);
}

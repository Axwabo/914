import { graphlib, layout } from "@dagrejs/dagre";
import type { Edge, Node } from "@vue-flow/core";
import { recipes } from "../cache.ts";
import { itemTypes, keys } from "./keys.ts";

const zeroZero = { x: 0, y: 0 };
export const nodes = itemTypes.map((type): Node<any> => ({
    id: type,
    position: zeroZero,
    data: { label: type }
}));

export const edges: Edge[] = keys(recipes).map(type => {
    const recipe = recipes[type];
    return keys(recipe).map(mode => recipe[mode]!.filter(e => e.kind === "item").map(output => output.items.map((item): Edge => ({
        id: `${type} -> ${mode} -> ${item.type}`,
        source: type,
        target: item.type,
        label: mode,
        markerEnd: "arrow"
    }))));
}).flat(3);

export const graph = createGraph();

applyLayout();

function createGraph(): graphlib.Graph {
    const graph = new graphlib.Graph();
    graph.setDefaultEdgeLabel(() => ({}));
    graph.setGraph({ rankdir: "TB" });
    for (const node of nodes)
        graph.setNode(node.id, { width: 100, height: 100 });
    const usedIDs = new Set<string>();
    for (const edge of edges) {
        if (edge.source === edge.target || usedIDs.has(edge.id))
            continue;
        usedIDs.add(edge.id);
        graph.setEdge(edge.source, edge.target);
    }
    layout(graph);
    return graph;
}

function applyLayout() {
    for (const node of nodes) {
        const positioned = graph.node(node.id)!;
        node.position = { x: positioned.x, y: positioned.y };
    }
}

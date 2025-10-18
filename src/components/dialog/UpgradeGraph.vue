<script setup lang="ts">
import { type Edge, VueFlow } from "@vue-flow/core";
import { ref } from "vue";
import { recipes } from "../../cache.ts";
import { itemTypes, keys } from "../../utils/keys.ts";
import Close from "./Close.vue";

const gridItems = Math.ceil(Math.sqrt(itemTypes.length));

const nodes = ref(itemTypes.map((type, index) => ({
    id: type,
    position: {
        x: 300 * Math.floor(index / gridItems),
        y: 300 * (index % gridItems)
    },
    data: { label: type }
})));

const edges: Edge[] = keys(recipes).map(type => {
    const recipe = recipes[type];
    return keys(recipe).map(mode => recipe[mode]!.filter(e => e.kind === "item").map(output => output.items.map((item): Edge => ({
        id: `${type} -> ${mode} -> ${item.type}`,
        source: type,
        target: item.type,
        label: mode,
        markerEnd: "arrow"
    }))));
}).flat(3);
</script>

<template>
    <Close />
    <div class="graph">
        <VueFlow :nodes :edges :nodes-connectable="false" />
    </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

.graph {
    width: 100%;
    height: 100%;
}
</style>

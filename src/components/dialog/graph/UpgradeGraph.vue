<script setup lang="ts">
import { VueFlow } from "@vue-flow/core";
import { edges, nodes } from "../../../utils/graph.ts";
import ItemNode from "./ItemNode.vue";
</script>

<template>
    <div class="graph">
        <VueFlow :nodes :edges :nodes-connectable="false">
            <template #node-item="props">
                <ItemNode :type="props.data.type" />
            </template>
        </VueFlow>
    </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

.graph {
    flex: 1;
}
</style>

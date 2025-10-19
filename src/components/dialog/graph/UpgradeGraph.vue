<script setup lang="ts">
import { VueFlow } from "@vue-flow/core";
import { edges, nodes } from "../../../utils/graph.ts";
import Close from "../Close.vue";
import ItemNode from "./ItemNode.vue";
</script>

<template>
    <Close />
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
    width: 100%;
    height: 100%;
}
</style>

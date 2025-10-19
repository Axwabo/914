<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "../LoadingSpinner.vue";
import Close from "./Close.vue";

const graph = defineAsyncComponent({
    loader: () => import("./graph/UpgradeGraph.vue"),
    delay: 0,
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <Close />
    <h2>Upgrade Graph</h2>
    <div class="graph-wrapper">
        <graph />
    </div>
</template>

<style scoped>
h2 {
    margin: 0;
}

.graph-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>

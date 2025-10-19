<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineAsyncComponent } from "vue";
import useStore from "../store.ts";
import LoadingSpinner from "./LoadingSpinner.vue";
import Scp914Item from "./Scp914Item.vue";

const { from, to, selecting } = storeToRefs(useStore());

const upgrade = defineAsyncComponent({
    loader: () => import("./UpgradePath.vue"),
    delay: 0,
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <div class="path-selector">
        <Scp914Item v-if="from" :type="from" v-on:click="selecting = 'from'" />
        <button v-else v-on:click="selecting = 'from'">From</button>
        <upgrade v-if="from && to && from !== to" :key="`${from} -> ${to}`" />
        <span v-else>→</span>
        <Scp914Item v-if="to" :type="to" v-on:click="selecting = 'to'" />
        <button v-else v-on:click="selecting = 'to'">To</button>
    </div>
</template>

<style scoped>
.path-selector {
    padding: 0 1rem 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}
</style>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineAsyncComponent } from "vue";
import useStore from "../store.ts";
import LoadingSpinner from "./LoadingSpinner.vue";
import Scp914Item from "./Scp914Item.vue";

const { from, to, selecting } = storeToRefs(useStore());

const upgrade = defineAsyncComponent({
    loader: () => import("./UpgradePath.vue"),
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <div class="path-selector">
        <button v-on:click="selecting = 'from'">{{ selecting === "from" ? "Select Item" : "From" }}</button>
        <button v-on:click="selecting = 'to'">{{ selecting === "to" ? "Select Item" : "To" }}</button>
        <button v-on:click="[from, to] = [to, from]">Swap</button>
        <Scp914Item v-if="from" :type="from" small />
        <upgrade v-if="from && to && from !== to" :key="`${from} -> ${to}`" />
        <Scp914Item v-if="to" :type="to" small />
    </div>
</template>

<style scoped>
.path-selector {
    margin: 0 0.5rem 0.5rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>

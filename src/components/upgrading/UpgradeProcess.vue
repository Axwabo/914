<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineAsyncComponent } from "vue";
import useStore from "../../store.js";
import LoadingSpinner from "../LoadingSpinner.vue";
import Scp914Item from "../Scp914Item.vue";

const { from, to } = storeToRefs(useStore());

const upgrade = defineAsyncComponent({
    loader: () => import("./UpgradePath.vue"),
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <div class="upgrade-process">
        <Scp914Item v-if="from" :type="from" small />
        <upgrade v-if="from && to && from !== to" :key="`${from} -> ${to}`" />
        <Scp914Item v-if="to" :type="to" small />
    </div>
</template>

<style scoped>

.upgrade-process {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>

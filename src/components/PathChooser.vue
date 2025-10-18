<script setup lang="ts">
import { storeToRefs } from "pinia";
import { watch } from "vue";
import useStore from "../store.ts";
import { findUpgradePaths } from "../utils/upgrading.ts";
import Scp914Item from "./Scp914Item.vue";

const { from, to, selecting } = storeToRefs(useStore());

watch([ from, to ], ([ from, to ]) => {
    if (from == null || to == null)
        return;
    void findUpgradePaths(from, to);
});
</script>

<template>
    <div class="path-selector">
        <Scp914Item v-if="from" :type="from" />
        <button v-else v-on:click="selecting = 'from'">From</button>
        <span>→</span>
        <Scp914Item v-if="to" :type="to" />
        <button v-else v-on:click="selecting = 'to'">To</button>
    </div>
</template>

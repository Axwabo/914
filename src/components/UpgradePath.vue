<script setup lang="ts">
import useStore from "../store.ts";
import { findPath } from "../utils/upgrading.ts";
import Scp914Item from "./Scp914Item.vue";

const { from, to } = useStore();

const path = findPath(from!, to!);
</script>

<template>
    <span v-if="path===null">No connection</span>
    <template v-else>
        <template v-for="(node, index) in path">
            <Scp914Item v-if="index !== 0" :type="node.from" small disabled />
            <span>→ {{ node.mode }} →</span>
        </template>
    </template>
</template>

<style scoped>

</style>

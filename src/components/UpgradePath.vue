<script setup lang="ts">
import useStore from "../store.ts";
import { findPath } from "../utils/upgrading.ts";
import MethodDisplay from "./dialog/items/MethodDisplay.vue";
import Scp914Item from "./Scp914Item.vue";

const { from, to } = useStore();

const path = findPath(from!, to!);
</script>

<template>
    <span v-if="path===null">No connection</span>
    <template v-else v-for="(node, index) in path">
        <Scp914Item v-if="index !== 0" :type="node.from" small disabled />
        →
        <MethodDisplay :method="node" />
        →
    </template>
</template>

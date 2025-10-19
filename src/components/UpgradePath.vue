<script setup lang="ts">
import useStore from "../store.ts";
import { findPath } from "../utils/upgrading.ts";

const { from, to } = useStore();

const path = findPath(from!, to!);
</script>

<template>
    <span v-if="path===null">No connection</span>
</template>

<style scoped>

</style>

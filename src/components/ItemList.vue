<script setup lang="ts">
import useStore from "../store.ts";
import { itemImages } from "../types/item.ts";
import { keys } from "../utils/keys.ts";
import Scp914Item from "./Scp914Item.vue";

const { interact } = useStore();
</script>

<template>
    <div class="item-list">
        <Scp914Item v-for="type in keys(itemImages)" :type v-on:click="interact(type)" />
    </div>
</template>

<style scoped>
.item-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 2rem;
    overflow-y: auto;
    scrollbar-gutter: stable;
}
</style>

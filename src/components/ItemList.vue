<script setup lang="ts">
import { itemImages } from "../types/item.ts";
import Scp914Item from "./Scp914Item.vue";
</script>

<template>
    <div class="item-list">
        <Scp914Item v-for="type in Object.keys(itemImages)" :type="type" />
    </div>
</template>

<style scoped>
.item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
}
</style>

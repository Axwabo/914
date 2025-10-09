<script setup lang="ts">
import { itemImages, type ItemType } from "../types/item.ts";

const { type } = defineProps<{ type: ItemType; }>();
</script>

<template>
    <div class="item">
        <img :src="itemImages[type]" alt="" draggable="false">
        <span>{{ type }}</span>
    </div>
</template>

<style scoped>
.item {
    display: grid;
    grid-template-rows: 10rem auto;
    text-align: center;
    gap: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 10rem;
    border-radius: 8px;
}

.item img {
    height: 10rem;
    -webkit-user-drag: none;
}
</style>

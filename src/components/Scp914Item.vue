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
    display: flex;
    flex-direction: column;
    text-align: center;
}

.item img {
    width: 10rem;
    -webkit-user-drag: none;
}
</style>

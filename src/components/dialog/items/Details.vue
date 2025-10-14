<script setup lang="ts">
import { items } from "../../../cache.ts";
import type { ItemType } from "../../../types/item.ts";
import Scp914Item from "../../Scp914Item.vue";

const { type } = defineProps<{ type: ItemType; }>();

const item = items[type];
</script>

<template>
    <div class="details">
        <Scp914Item :type disabled />
        <span>Category: {{ item.category }}</span>
        <span v-if="item.description">{{ item.description }}</span>
        <span v-if="item.kind === 'ammo'">Unit price: {{ item.unitPrice }}</span>
        <span v-else-if="item.kind === 'keycard' && item.permissions">Permissions: {{ item.permissions }}</span>
        <span v-else-if="item.kind === 'firearm'">Magazine size: {{ item.magSize }}</span>
    </div>
</template>

<style scoped>
.details {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>

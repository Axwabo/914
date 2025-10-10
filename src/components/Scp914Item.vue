<script setup lang="ts">
import { itemImages, type ItemType } from "../types/item.ts";
import ItemContextMenu from "./ItemContextMenu.vue";
import useStore from "../store.ts";

const { type, small } = defineProps<{ type: ItemType; small?: boolean; }>();

const src = `url("${ itemImages[type] }")`;

const { showOutputs } = useStore();
</script>

<template>
    <div :class="{'item': true, small: !!small}" v-on:click="showOutputs(type)">
        <span>{{ type }}</span>
        <ItemContextMenu :type />
    </div>
</template>

<style scoped>
.item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    width: 12rem;
    height: 12rem;
    border-radius: 8px;
    background-image: v-bind(src);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.item.small {
    width: 8rem;
    height: 8rem;
}

.item span {
    padding: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
}

.item.small span {
    padding: 0.2rem;
    font-size: 0.9em;
}
</style>

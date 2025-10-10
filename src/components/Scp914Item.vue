<script setup lang="ts">
import { itemImages, type ItemType } from "../types/item.ts";
import ItemContextMenu from "./ItemContextMenu.vue";
import { useTemplateRef } from "vue";
import useStore from "../store.ts";

const { type } = defineProps<{ type: ItemType; }>();

const container = useTemplateRef("container");

const { showOutputs } = useStore();

function openContext(event: MouseEvent) {
    container.value?.open(event.x, event.y);
    event.preventDefault();
}
</script>

<template>
    <div class="item" v-on:contextmenu="openContext" v-on:click="showOutputs(type)">
        <img :src="itemImages[type]" alt="" draggable="false">
        <span>{{ type }}</span>
        <ItemContextMenu :type ref="container" />
    </div>
</template>

<style scoped>
.item {
    position: relative;
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

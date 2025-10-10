<script setup lang="ts">
import { itemImages, type ItemType } from "../types/item.ts";
import ItemContextMenu from "./ItemContextMenu.vue";
import { useTemplateRef } from "vue";
import useStore from "../store.ts";

const { type } = defineProps<{ type: ItemType; }>();

const src = `url("${ itemImages[type] }")`;

const container = useTemplateRef("container");

const { showOutputs } = useStore();

function openContext(event: MouseEvent) {
    container.value?.open(event.x, event.y);
    event.preventDefault();
}
</script>

<template>
    <div class="item" v-on:contextmenu="openContext" v-on:click="showOutputs(type)">
        <span>{{ type }}</span>
        <ItemContextMenu :type ref="container" />
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

.item span {
    padding: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
}
</style>

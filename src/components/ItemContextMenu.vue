<script setup lang="ts">
import type { ItemType } from "../types/item.ts";
import { ref } from "vue";
import useStore from "../store.ts";

const { type } = defineProps<{ type: ItemType; }>();

const { openContextMenu } = useStore();

const container = ref<HTMLDialogElement>();

const translate = ref("0 0");

defineExpose({
    open(clientX: number, clientY: number) {
        const dialog = container.value;
        if (!dialog)
            return;
        openContextMenu(dialog);
        const { left, top } = dialog.getBoundingClientRect();
        translate.value = `${ clientX - left }px ${ clientY - top }px`;
    }
});
</script>

<template>
    <dialog class="context-menu" ref="container">
        <span>{{ type }}</span>
    </dialog>
</template>

<style scoped>
.context-menu {
    margin: 0;
    padding: 0.5rem;
    translate: v-bind(translate);
}
</style>

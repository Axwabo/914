<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import useStore from "../../store.ts";
import About from "./About.vue";
import UpgradeGraph from "./graph/UpgradeGraph.vue";
import Item from "./Item.vue";

const { dialogType, item } = storeToRefs(useStore());

const element = ref<HTMLDialogElement>();

watch(dialogType, value => {
    if (value === "none")
        element.value?.close();
    else
        element.value?.showModal();
}, { flush: "sync" });
</script>

<template>
    <dialog ref="element" v-on:close="dialogType = 'none'" :class="{ max: dialogType !== 'info' }">
        <Item v-if="item != null && dialogType === 'item'" :type="item" />
        <About v-else-if="dialogType === 'info'" />
        <UpgradeGraph v-else-if="dialogType === 'graph'" />
    </dialog>
</template>

<style scoped>
dialog {
    text-align: center;
    font-size: 1.25em;
    padding: 1rem;
}

dialog.max {
    width: 100%;
    height: 100%;
}

dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
}

dialog[open] {
    display: flex;
    flex-direction: column;
}
</style>

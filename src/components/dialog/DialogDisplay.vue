<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import useStore from "../../store.ts";
import About from "./About.vue";

const { dialogType } = storeToRefs(useStore());

const element = ref<HTMLDialogElement>();

watch(dialogType, value => {
    if (value === "none")
        element.value?.close();
    else
        element.value?.showModal();
});
</script>

<template>
    <dialog ref="element" v-on:close="dialogType = 'none'">
        <button v-on:click="dialogType = 'none'">Close</button>
        <About v-if="dialogType === 'info'" />
    </dialog>
</template>

<style scoped>
dialog {
    text-align: center;
    font-size: 1.25em;
}
</style>

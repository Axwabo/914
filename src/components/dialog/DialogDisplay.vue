<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import useStore from "../../dialogStore.ts";
import About from "./About.vue";

const { type } = storeToRefs(useStore());

const element = ref<HTMLDialogElement>();

watch(type, value => {
    if (value === "none")
        element.value?.close();
    else
        element.value?.showModal();
});
</script>

<template>
    <dialog ref="element" v-on:close="type = 'none'">
        <button v-on:click="type = 'none'">Close</button>
        <About v-if="type === 'info'" />
    </dialog>
</template>

<style scoped>
dialog {
    text-align: center;
    font-size: 1.25em;
}
</style>

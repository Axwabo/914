<script setup lang="ts">
import useStore from "../../store.ts";

const { showModal } = useStore();
</script>

<template>
    <button v-on:click="showModal('none')">Close</button>
</template>

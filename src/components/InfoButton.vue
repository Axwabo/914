<script setup lang="ts">
import useStore from "../dialogStore.ts";

const { open } = useStore();
</script>

<template>
    <button class="header-button" v-on:click="open('info')">ℹ</button>
</template>

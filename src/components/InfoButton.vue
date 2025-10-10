<script setup lang="ts">
import useStore from "../store.ts";

const { showModal } = useStore();
</script>

<template>
    <button class="header-button" v-on:click="showModal('info')">ℹ</button>
</template>

<script setup lang="ts">
import { itemImages } from "../types/item.ts";

import recipes from "../assets/data/recipes.json";
</script>

<template>
    <img v-for="src in Object.values(itemImages)" :src="src" alt="">
    <pre>{{ recipes }}</pre>
</template>

<style scoped>
img {
    width: 10rem;
}
</style>

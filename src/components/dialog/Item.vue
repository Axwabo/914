<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../store.ts";
import type { ItemType } from "../../types/item.ts";
import ItemNavbar from "./items/ItemNavbar.vue";
import Outputs from "./items/Outputs.vue";

const { type } = defineProps<{ type: ItemType; }>();

const { itemPage } = storeToRefs(useStore());

</script>

<template>
    <h2 class="title">{{ type }}</h2>
    <ItemNavbar />
    <Outputs v-if="itemPage === 'outputs'" :type="type" />
</template>

<style scoped>
.title {
    margin: 0;
}

.outputs h3 {
    margin: 0;
    text-align: left;
    align-self: center;
}

.outputs section {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../store.ts";
import type { ItemType } from "../../types/item.ts";
import Details from "./items/Details.vue";
import ItemNavbar from "./items/ItemNavbar.vue";
import Obtaining from "./items/Obtaining.vue";
import Outputs from "./items/Outputs.vue";

const { type } = defineProps<{ type: ItemType; }>();

const { itemPage } = storeToRefs(useStore());

</script>

<template>
    <h2 class="title">{{ type }}</h2>
    <ItemNavbar />
    <Details v-if="itemPage === 'details'" :type />
    <Outputs v-else-if="itemPage === 'outputs'" :type />
    <Obtaining v-else-if="itemPage === 'obtaining'" :type />
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

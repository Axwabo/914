<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../../store.ts";
import type { ItemType } from "../../../types/item.ts";

const { type } = defineProps<{ type: ItemType; }>();

const { itemPage } = storeToRefs(useStore());
</script>

<template>
    <button :class="{'nav-button': true, active: itemPage === type}">
        {{ type.charAt(0).toUpperCase() }}{{ type.substring(1) }}
    </button>
</template>

<style scoped>
.nav-button {
    padding: 0.5em;
}

.nav-button.active {
    text-decoration: underline greenyellow;
    text-decoration-thickness: 2px;
}
</style>

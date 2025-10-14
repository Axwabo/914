<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../../store.ts";
import type { ItemPage } from "../../../types/dialogs.ts";

const { page } = defineProps<{ page: ItemPage; }>();

const { itemPage } = storeToRefs(useStore());
</script>

<template>
    <button :class="{'nav-button': true, active: itemPage === page}" v-on:click="itemPage = page">
        {{ page.charAt(0).toUpperCase() }}{{ page.substring(1) }}
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

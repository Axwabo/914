<script setup lang="ts">
import useStore from "../../../store.ts";
import { storeToRefs } from "pinia";
import type { DialogType } from "../../../types/dialogs.ts";

const { type } = defineProps<{ type: DialogType; }>();

const { dialogType } = storeToRefs(useStore());
</script>

<template>
    <button :class="{'nav-button': true, active: dialogType === type}">
        <slot />
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

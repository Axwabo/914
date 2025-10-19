<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../store.js";

const { from, to, selecting } = storeToRefs(useStore());

</script>

<template>
    <div class="upgrade-options">
        <button v-on:click="selecting = selecting === 'from' ? 'none' : 'from'">
            {{ selecting === "from" ? "Select Input" : "Change Input" }}
        </button>
        <button v-on:click="selecting = selecting === 'to' ? 'none' : 'to'">
            {{ selecting === "to" ? "Select Target" : "Change Target" }}
        </button>
        <button v-on:click="[from, to] = [to, from]">Swap</button>
    </div>
</template>

<style scoped>
.upgrade-options {
    display: grid;
    grid-template-columns: repeat(3, minmax(15vw, 1fr));
    gap: 0.5rem;
}
</style>

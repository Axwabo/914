<script setup lang="ts">
import PWABadge from './components/PWABadge.vue';
import scp from "./assets/images/SCP.svg";
import { defineAsyncComponent } from "vue";

const HelloWorld = defineAsyncComponent(() => import("./components/HelloWorld.vue"));
</script>

<template>
    <Suspense>
        <HelloWorld />
        <template #fallback>
            <img :src="scp" alt="Loading..." class="spinner" width="135" height="135">
        </template>
    </Suspense>
    <PWABadge />
</template>

<style scoped>
.spinner {
    filter: invert(1);
    object-position: -0.2px -4px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}
</style>

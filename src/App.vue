<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import PWABadge from './components/PWABadge.vue';

const content = defineAsyncComponent({
    loader: () => import("./components/Content.vue"),
    delay: 0,
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <content />
    <PWABadge />
</template>

<script setup lang="ts">
import PWABadge from './components/PWABadge.vue';
import AppHeader from "./components/AppHeader.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { defineAsyncComponent } from "vue";

const content = defineAsyncComponent({
    loader: () => import("./components/Content.vue"),
    delay: 0,
    loadingComponent: LoadingSpinner
});
</script>

<template>
    <AppHeader />
    <content />
    <PWABadge />
</template>

<script setup lang="ts">
import Close from "../Close.vue";
import NavButton from "./NavButton.vue";
</script>

<template>
    <nav>
        <NavButton page="details" />
        <NavButton page="outputs" />
        <NavButton page="obtaining" />
        <Close />
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

:deep(button) {
    font-size: 0.8em;
    padding: 0.2em 0.5em;
}
</style>

<script setup lang="ts">
import NavButton from "./NavButton.vue";
import Close from "../Close.vue";
</script>

<template>
    <nav>
        <NavButton type="outputs">Outputs</NavButton>
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

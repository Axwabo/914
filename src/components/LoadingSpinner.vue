<script setup lang="ts">
import scp from "../assets/images/SCP.svg";
</script>

<template>
    <img :src="scp" alt="Loading..." class="spinner" width="135" height="135">
</template>

<style scoped>
.spinner {
    filter: invert(1);
    object-position: -0.2px -4px;
    animation: spin 2s linear infinite;
    justify-self: center;
    align-self: center;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}
</style>

<script setup lang="ts">
import scp from "../assets/images/SCP.svg";
</script>

<template>
    <img :src="scp" alt="Loading..." class="loading spinner" width="135" height="135">
    <p class="loading text">Loading...</p>
</template>

<style>
.loading {
    justify-self: center;
    align-self: center;
}

.spinner {
    filter: invert(1);
    object-position: -0.2px -4px;
    animation: spin 2s linear infinite;
}

.text {
    display: none;
    font-weight: bold;
    font-size: 2rem;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}

@media (prefers-reduced-motion: reduce) {
    .spinner {
        display: none;
    }

    .text {
        display: initial;
    }
}
</style>

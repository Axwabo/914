<script setup lang="ts">
import GraphButton from "./GraphButton.vue";
import InfoButton from "./InfoButton.vue";
</script>

<template>
    <header>
        <InfoButton />
        <div class="text">
            <h1>SCP-914 Recipes</h1>
            Not affiliated with <a href="https://scpslgame.com" target="SCP: Secret Laboratory">Northwood Studios</a>
        </div>
        <GraphButton />
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0.5rem;
}

.text {
    flex: 1;
    text-align: center;
}

.text h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}
</style>

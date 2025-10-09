<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const info = defineAsyncComponent(() => import("./InfoButton.vue"));
</script>

<template>
    <header>
        <button class="header-button hidden"></button>
        <div class="text">
            <h1>SCP-914 Recipes</h1>
            Not affiliated with <a href="https://scpslgame.com" target="SCP: Secret Laboratory">Northwood Studios</a>
        </div>
        <Suspense>
            <info />
            <template #fallback>
                <button class="header-button">ℹ</button>
            </template>
        </Suspense>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.text {
    flex: 1;
    text-align: center;
}

.text h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.hidden {
    visibility: hidden;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}
</style>

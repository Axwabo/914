<script setup lang="ts">
import UpgradeChooser from "./upgrading/UpgradeChooser.vue";
import UpgradeProcess from "./upgrading/UpgradeProcess.vue";
</script>

<template>
    <div class="upgrade-view">
        <UpgradeChooser />
        <UpgradeProcess />
    </div>
</template>

<style scoped>
.upgrade-view {
    padding: 0 1rem 0.5rem 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>

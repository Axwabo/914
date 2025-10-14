<script setup lang="ts">
import { computed } from "vue";
import { obtaining } from "../../../cache.ts";
import type { ItemType } from "../../../types/item.ts";
import { formatChanceValue } from "../../../utils/format.ts";

const { type } = defineProps<{ type: ItemType; }>();

const methods = computed(() => obtaining[type]);
</script>

<template>
    <ul>
        <li v-for="method in methods">
            From {{ method.from }} on {{ method.mode }} ({{ formatChanceValue(method.chance) }}%)
        </li>
    </ul>
</template>

<style scoped>

</style>

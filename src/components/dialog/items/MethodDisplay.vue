<script setup lang="ts">
import type { ObtainingMethod } from "../../../types/outputs.ts";
import { formatChanceValue } from "../../../utils/convert.ts";

const { method } = defineProps<{ method: ObtainingMethod; }>();
</script>

<template>
    <span class="method">{{ method.mode }}</span>
    <span v-if="method.chance !== 1"> ({{ formatChanceValue(method.chance) }}%)</span>
</template>

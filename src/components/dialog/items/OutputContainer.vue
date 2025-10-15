<script setup lang="ts">
import type { ItemType } from "../../../types/item.ts";
import type { Output } from "../../../types/outputs.ts";
import { formatChanceValue } from "../../../utils/convert.ts";
import OutputItem from "./OutputItem.vue";

const { input, output } = defineProps<{ input: ItemType; output: Output; }>();
</script>

<template>
    <div class="output">
        <span v-if="output.chance !== 1" class="chance">Chance: {{ formatChanceValue(output.chance) }}%</span>
        <span v-if="output.kind === 'destroy'" class="destroy">Destroys the item</span>
        <span v-else-if="output.kind === 'break'" class="destroy">Breaks the {{ input }}</span>
        <span v-else-if="output.kind === 'shatter'" class="destroy">Shatters immediately</span>
        <span v-else-if="output.kind === 'randomize'">Randomizes attachments</span>
        <span v-else-if="output.kind === 'recharge'">Recharges the {{ input }}</span>
        <div v-else-if="output.kind ==='item'" class="item-list">
            <template v-for="(item, index) in output.items" :key="item.type">
                <span v-if="index !== 0">+</span>
                <OutputItem :item :input />
            </template>
        </div>
        <span v-else>Nothing happens</span>
    </div>
</template>

<style scoped>
.output {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.25rem;
}

.output:has(:only-child) {
    justify-content: center;
}

.chance {
    font-weight: bold;
}

.destroy {
    color: red;
}

.item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}
</style>

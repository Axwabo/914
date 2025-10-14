<script setup lang="ts">
import type { ItemType } from "../../../types/item.ts";
import type { Output } from "../../../types/outputs.ts";
import { formatChanceValue } from "../../../utils/format.ts";
import Scp914Item from "../../Scp914Item.vue";

const { input, output } = defineProps<{ input: ItemType; output: Output; }>();
</script>

<template>
    <div class="output">
        <span v-if="output.chance !== 1" class="chance">Chance: {{ formatChanceValue(output.chance) }}%</span>
        <span v-if="output.kind === 'destroy'" class="destroy">Destroys the item</span>
        <span v-else-if="output.kind === 'break'" class="destroy">Breaks the {{ input }}</span>
        <span v-else-if="output.kind === 'randomize'">Randomizes attachments</span>
        <span v-else-if="output.kind === 'recharge'">Recharges the {{ input }}</span>
        <div v-else-if="output.kind ==='item'" class="item-list">
            <div v-for="(item, index) in output.items" :key="item.type" class="item">
                <span v-if="index !== 0">+</span>
                <Scp914Item :type="item.type" small />
                <span v-if="item.count !== 1">x{{ item.count }}</span>
            </div>
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

.item {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.item-list {
    display: flex;
}

.item span {
    align-self: center;
}
</style>

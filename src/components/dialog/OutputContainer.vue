<script setup lang="ts">
import type { Output } from "../../types/outputs.ts";
import type { ItemType } from "../../types/item.ts";
import Scp914Item from "../Scp914Item.vue";

const { input, output } = defineProps<{ input: ItemType; output: Output; }>();

const chancePercent = output.chance * 100;
const fraction = chancePercent % 1;
const chanceString = fraction < 0.0001 || fraction > 0.9999 ? Math.round(chancePercent).toString() : chancePercent.toFixed(2);
</script>

<template>
    <div class="output">
        <span v-if="chancePercent !== 100" class="chance">Chance: {{ chanceString }}%</span>
        <span v-if="output.kind === 'destroy'" class="destroy">Destroys the item</span>
        <span v-else-if="output.kind === 'break'" class="destroy">Breaks the {{ input }}</span>
        <span v-else-if="output.kind === 'randomize'">Randomizes attachments</span>
        <span v-else-if="output.kind === 'recharge'">Recharges the {{ input }}</span>
        <template v-else-if="output.kind ==='item'">
            <Scp914Item v-for="item in output.items" :type="item.type" />
        </template>
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

.chance {
    font-weight: bold;
}

.destroy {
    color: red;
}
</style>

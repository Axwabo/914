<script setup lang="ts">
import { items } from "../../../cache.ts";
import useStore from "../../../store.ts";
import type { ItemType } from "../../../types/item.ts";
import type { OutputItem } from "../../../types/outputs.ts";
import { exchangeAmmo } from "../../../utils/convert.ts";
import Scp914Item from "../../Scp914Item.vue";

const { input, item } = defineProps<{ input: ItemType; item: OutputItem; }>();

const { interact } = useStore();

const inputData = items[input];
const outputData = items[item.type];
const count = outputData.kind !== "ammo"
    ? item.count
    : inputData.kind === "ammo"
        ? exchangeAmmo(inputData.unitPrice, outputData.unitPrice, inputData.roundsPerMag).exchanged
        : outputData.roundsPerMag * item.count;
</script>

<template>
    <Scp914Item :type="item.type" small v-on:click="interact(item.type)" />
    <span v-if="count !== 1" class="count">x{{ count }}</span>
</template>

<style scoped>
.count {
    align-self: center;
    font-weight: bold;
}
</style>

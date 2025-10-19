<script setup lang="ts">
import { computed, ref } from "vue";
import { items } from "../../cache.ts";
import type { Ammo, ItemType } from "../../types/item.ts";
import { exchangeAmmo } from "../../utils/convert.ts";
import { ammo } from "../../utils/keys.ts";

const input = ref<ItemType>(ammo[0]);
const output = ref<ItemType>(ammo[1]);

const amount = ref(1);

const converted = computed(() => exchangeAmmo(
    (items[input.value] as Ammo).unitPrice,
    (items[output.value] as Ammo).unitPrice,
    amount.value
));
</script>

<template>
    <h3>Calculator</h3>
    <div class="inputs">
        <label for="input">Input:</label>
        <select v-model="input" id="input">
            <option v-for="type in ammo">{{ type }}</option>
        </select>
        <label for="output">Output:</label>
        <select v-model="output" id="output">
            <option v-for="type in ammo">{{ type }}</option>
        </select>
        <label for="amount">Amount:</label>
        <input type="number" v-model="amount" id="amount" min="1" />
    </div>
    Exchanged: <span class="number">{{ converted.exchanged }}</span>
    <br>
    Remaining: <span class="number">{{ converted.remaining }}</span>
</template>

<style scoped>
h3 {
    margin: 0;
}

.inputs {
    justify-self: center;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    text-align: right;
    max-width: 20rem;
}

.number {
    display: inline-block;
    min-width: 2em;
    text-align: left;
}
</style>

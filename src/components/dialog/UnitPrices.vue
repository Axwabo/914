<script setup lang="ts">
import { computed, ref } from "vue";
import { items } from "../../cache.ts";
import type { Ammo, ItemType } from "../../types/item.ts";
import { exchangeAmmo } from "../../utils/convert.ts";
import { ammo } from "../../utils/keys.ts";
import Close from "./Close.vue";

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
    <Close />
    <h2>Unit Prices</h2>
    <p>
        Ammo upgrading works differently compared to other conversions.
        <br>
        Per <b class="input">input</b> ammo, you get
        <b class="output">output</b> number of exchanged rounds, and the remaining stays as input ammo.
    </p>
    <code>
        exchanged = Math.floor(amount * (inputPrice / outputPrice))
        <br>
        remaining = Math.ceil(amount - exchanged * (outputPrice / inputPrice))
    </code>
    <div class="table-container">
        <table>
            <thead>
            <tr>
                <th>Input</th>
                <th v-for="type in ammo" class="output">{{ type }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="input in ammo">
                <td class="input">{{ input }}</td>
                <td v-for="output in ammo">
                    <span class="input">{{ (items[input] as Ammo).unitPrice }}</span>
                    :
                    <span class="output">{{ (items[output] as Ammo).unitPrice }}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="calculator">
        <h3>Calculator</h3>
        <label for="input">Input: </label>
        <select v-model="input" id="input">
            <option v-for="type in ammo">{{ type }}</option>
        </select>
        <br>
        <label for="output">Output: </label>
        <select v-model="output" id="output">
            <option v-for="type in ammo">{{ type }}</option>
        </select>
        <br>
        <label for="amount">Amount: </label>
        <input type="number" v-model="amount" id="amount" min="1" />
        <br>
        Exchanged: {{ converted.exchanged }}
        <br>
        Remaining: {{ converted.remaining }}
    </div>
</template>

<style scoped>
h2, h3 {
    margin: 0;
}

.table-container {
    max-width: 100%;
    overflow-y: auto;
}

.table-container table {
    min-width: 100%;
    border-collapse: collapse;
}

.table-container :is(td, th) {
    border: 1px solid gray;
}

.input {
    color: #0f0;
}

.output {
    color: #bbf;
}
</style>

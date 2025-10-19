<script setup lang="ts">
import { items } from "../../cache.ts";
import type { Ammo } from "../../types/item.ts";
import { ammo } from "../../utils/keys.ts";
import AmmoExchangeCalculator from "./AmmoExchangeCalculator.vue";
import Close from "./Close.vue";
</script>

<template>
    <Close />
    <h2>Unit Prices</h2>
    <div class="scroller"><p>
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
        <AmmoExchangeCalculator />
    </div>
</template>

<style scoped>
h2 {
    margin: 0;
}

.scroller {
    overflow-y: auto;
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

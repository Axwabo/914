<script setup lang="ts">
import useStore from "../../store.ts";
import base from "../../utils/basePath.ts";
import Close from "./Close.vue";

const { showModal } = useStore();
</script>

<template>
    <Close />
    <p>
        This website is not affiliated with Northwood Studios.
        <br>
        SCP: Secret Laboratory is a free-to-play multiplayer game developed by Northwood Studios.
    </p>
    <a href="https://scpslgame.com" target="SCP: Secret Laboratory">Visit the official site for more information</a>
    <p>
        This app lets you view the SCP-914 recipes in SCP:SL.
        <br>
        All recipes were extracted from the server code and files.
    </p>
    <span>To view an item's outputs, obtaining methods or details, simply click it in the grid.</span>
    <p>
        Click <b>Change Input</b> and select an item.
        <br>
        Then, click <b>Change Target</b> and select the desired output item.
        <br>
        The closest* upgrade path from the input to the target.
    </p>
    <span>Click the branch icon in the top right to view a graph of all upgrades.</span>
    <div>
        Ammo conversion works differently.
        <button v-on:click="showModal('unitPrices')">See Unit Prices</button>
    </div>
    <p>
        Found an issue? Report it on
        <a :href="`https://github.com/Axwabo${base}`" :target="`Axwabo${base}`">GitHub</a>
    </p>
    <small>
        *The closest path is ranked based on the number of upgrades and the chance of an upgrade succeeding.
        <br>
        It uses Dijkstra's algorithm with weights being equal to <code>1 / chance</code>
    </small>
</template>

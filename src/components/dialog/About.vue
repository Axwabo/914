<script setup lang="ts">
import useStore from "../../store.ts";
import base from "../../utils/basePath.ts";
import Close from "./Close.vue";

const {showModal} = useStore();
</script>

<template>
    <Close />
    <p>
        This website is not affiliated with Northwood Studios.
        <br>
        SCP: Secret Laboratory is a free-to-play multiplayer game developed by Northwood Studios.
    </p>
    <a href="https://scpslgame.com" target="SCP: Secret Laboratory">Visit the official site for more information</a>
    <b>
        Content relating to the SCP Foundation, including the SCP Foundation logo, is licensed under
        <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons ShareAlike 3.0</a> and all concepts originate from the
        <a href="https://scpwiki.com">SCP Wiki</a> and its authors.<br>
        SCP: Secret Laboratory, being derived from this content, is hereby also released under Creative Commons ShareAlike 3.0.
        <br>
        This app uses assets from SCP:SL. SCP:SL assets not derived from SCP are not released under CC-BY-SA 3.0.
    </b>
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

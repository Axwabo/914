<script setup lang="ts">
import a7 from "../assets/images/A7.webp";
import adrenaline from "../assets/images/Adrenaline.webp";
import ak from "../assets/images/AK.webp";
import antiScp207 from "../assets/images/Anti-SCP-207.webp";
import coal from "../assets/images/Coal.webp";
import coin from "../assets/images/Coin.webp";
import com15 from "../assets/images/COM-15.webp";
import com18 from "../assets/images/COM-18.webp";
import com45 from "../assets/images/COM-45.webp";
import crossvector from "../assets/images/Crossvec.webp";
import flashbang from "../assets/images/Flashbang.webp";
import flashlight from "../assets/images/Flashlight.webp";
import frMg0 from "../assets/images/FR-MG-0.webp";
import fsp9 from "../assets/images/FSP-9.webp";
import jailbird from "../assets/images/Jailbird.webp";
import lantern from "../assets/images/Lantern.webp";

import recipes from "../assets/data/recipes.json";

const sources = [
    a7,
    adrenaline,
    ak,
    antiScp207,
    coal,
    coin,
    com15,
    com18,
    com45,
    crossvector,
    flashbang,
    flashlight,
    frMg0,
    fsp9,
    jailbird,
    lantern,

];
</script>

<template>
    <img v-for="src in sources" :src="src" alt="">
    <pre>{{ recipes }}</pre>
</template>

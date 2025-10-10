<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../store.ts";
import { recipes } from "../../cache.ts";

const { outputs: type } = storeToRefs(useStore());

const outputs = type.value ? recipes[type.value] : {};
</script>

<template v-if="!!type">
    <h2>{{ type }}</h2>
    <section v-for="key in Object.keys(outputs)">
        <h3>{{ key }}</h3>
    </section>
</template>

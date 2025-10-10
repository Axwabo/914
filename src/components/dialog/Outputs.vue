<script setup lang="ts">
import useStore from "../../store.ts";
import { recipes } from "../../cache.ts";
import OutputContainer from "./OutputContainer.vue";

const { outputs: type } = useStore();

const outputs = type ? recipes[type] : {};
</script>

<template v-if="!!type">
    <h2>{{ type }} outputs</h2>
    <div class="outputs">
        <template v-for="key in Object.keys(outputs)">
            <h3>{{ key }}</h3>
            <section>
                <OutputContainer v-for="output in outputs[key]" :input="type!" :output="output" />
            </section>
        </template>
    </div>
</template>

<style scoped>
.outputs {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-right: 1rem;
    gap: 3rem;
    overflow-y: auto;
}

.outputs h3 {
    margin: 0;
    text-align: left;
    align-self: center;
}

.outputs section {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>

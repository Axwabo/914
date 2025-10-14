<script setup lang="ts">
import useStore from "../../store.ts";
import { recipes } from "../../cache.ts";
import OutputContainer from "./OutputContainer.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import ItemNavbar from "./nav/ItemNavbar.vue";

const { outputs: type } = storeToRefs(useStore());

const outputs = computed(() => type.value ? recipes[type.value] : {});
</script>

<template v-if="type && outputs">
    <h2 class="title">{{ type }}</h2>
    <ItemNavbar />
    <div class="outputs">
        <template v-for="(key, index) in Object.keys(outputs)">
            <div v-if="index !== 0" class="horizontal-separator"></div>
            <h3>{{ key }}</h3>
            <section>
                <template v-for="(output, index) in outputs[key]" :key="`${type}-${key}-${output.kind}-${index}`">
                    <div class="vertical-separator" v-if="index !== 0"></div>
                    <OutputContainer :input="type!" :output="output" />
                </template>
            </section>
        </template>
    </div>
</template>

<style scoped>
.title {
    margin: 0;
}

.outputs {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-right: 1rem;
    gap: 1rem;
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

.horizontal-separator {
    width: 100%;
    height: 1px;
    background-color: gray;
    grid-column: span 2;
}

.vertical-separator {
    width: 1px;
    height: 100%;
    background-color: gray;
}
</style>

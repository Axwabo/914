<script setup lang="ts">
import { computed } from "vue";
import { recipes } from "../../../cache.ts";
import type { ItemType } from "../../../types/item.ts";
import OutputContainer from "../items/OutputContainer.vue";

const { type } = defineProps<{ type: ItemType; }>();

const outputs = computed(() => type ? recipes[type] : {});
</script>

<template>
    <div class="outputs">
        <template v-for="(key, index) in Object.keys(outputs)" :key>
            <div v-if="index !== 0" class="horizontal-separator"></div>
            <h3>{{ key }}</h3>
            <section>
                <template v-for="(output, index) in outputs[key]" :key="`${type}-${key}-${output.kind}-${index}`">
                    <div class="vertical-separator" v-if="index !== 0"></div>
                    <OutputContainer :input="type" :output="output" />
                </template>
            </section>
        </template>
    </div>
</template>

<style scoped>
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

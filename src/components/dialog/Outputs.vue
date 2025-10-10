<script setup lang="ts">
import useStore from "../../store.ts";
import { recipes } from "../../cache.ts";
import OutputContainer from "./OutputContainer.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { outputs: type } = storeToRefs(useStore());

const outputs = computed(() => type.value ? recipes[type.value] : {});
</script>

<template v-if="!!type">
    <h2>{{ type }} outputs</h2>
    <div class="outputs">
        <template v-for="key in Object.keys(outputs)">
            <h3>{{ key }}</h3>
            <section>
                <OutputContainer v-for="(output, index) in outputs[key]" :key="`${type}-${key}-${output.kind}-${index}`"
                                 :input="type!" :output="output" />
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

.outputs section:not(:last-of-type) {
    border-bottom: 1px solid gray;
}
</style>

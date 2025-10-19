<script setup lang="ts">
import { computed } from "vue";
import { obtaining } from "../../../cache.ts";
import type { ItemType } from "../../../types/item.ts";
import Scp914Item from "../../Scp914Item.vue";
import MethodDisplay from "./MethodDisplay.vue";

const { type } = defineProps<{ type: ItemType; }>();

const methods = computed(() => obtaining[type]);
</script>

<template>
    <div class="obtaining">
        <div v-if="methods" v-for="method in methods" :key="`${method.from}->${method.mode} (${method.chance})`">
            From
            <Scp914Item :type="method.from" small />
            on
            <MethodDisplay :method="method" />
        </div>
        <p v-else>{{ type }} cannot be obtained in SCP-914</p>
    </div>
</template>

<style scoped>
.obtaining {
    align-self: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 50rem;
}

.obtaining p {
    color: red;
    margin-bottom: 0;
}
</style>

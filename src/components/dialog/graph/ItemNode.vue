<script setup lang="ts">
import type { ItemType } from "../../../types/item.ts";
import Scp914Item from "../../Scp914Item.vue";

const { type } = defineProps<{ type: ItemType; }>();
</script>

<template>
    <Scp914Item :type small />
</template>

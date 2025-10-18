<script setup lang="ts">
import { itemImages, type ItemType } from "../types/item.ts";

const { type, small, disabled } = defineProps<{ type: ItemType; small?: boolean; disabled?: boolean; }>();

const src = `url("${ itemImages[type] }")`;

const emit = defineEmits([ "click" ]);
</script>

<template>
    <button :class="{'item': true, small: !!small}" v-on:click="emit('click')" :disabled>
        <span>{{ type }}</span>
    </button>
</template>

<style scoped>
.item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
    width: 12rem;
    height: 12rem;
    border-radius: 8px;
    border: none;
    font-weight: initial;
    padding: 0;
    background-color: transparent;
    background-image: v-bind(src);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.item[disabled] {
    pointer-events: none;
}

.item[disabled] span {
    visibility: hidden;
}

.item.small {
    width: 8rem;
    height: 8rem;
}

.item span {
    padding: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: opacity 0.2s;
}

.item.small span {
    padding: 0.2rem;
    font-size: 0.9em;
}

.item:not([disabled]):is(:hover, :focus-visible) span {
    opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
    .item span {
        transition: none;
    }
}
</style>

<script lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../store.ts";
import { defineComponent } from "vue";

const { contextMenu } = storeToRefs(useStore());

export default defineComponent({
    props: {
        type: String
    },
    methods: {
        open() {
            contextMenu.value = this;
        }
    },
    computed: {
        isOpen() {
            return contextMenu.value === this;
        },
    }
})
</script>

<template>
    <dialog class="context-menu" :open="isOpen">
        <span>{{ type }}</span>
    </dialog>
</template>

<style scoped>
.context-menu {
    margin: 0;
    padding: 0.5rem;
}
</style>

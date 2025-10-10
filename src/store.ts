import type { DialogType } from "./types/dialogs.ts";
import { defineStore } from "pinia";
import type { Component } from "vue";

interface State {
    dialogType: DialogType;
    contextMenu: Component | null;
}

const store = defineStore("dialogs", {
    state: (): State => ({ dialogType: "none", contextMenu: null }),
    actions: {
        showModal(type: DialogType) {
            this.dialogType = type;
        }
    }
});

export default function useStore() {
    return store();
}

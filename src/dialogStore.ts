import type { DialogType } from "./types/dialogs.ts";
import { defineStore } from "pinia";

interface State {
    type: DialogType;
}

const store = defineStore("dialogs", {
    state: (): State => ({ type: "none" }),
    actions: {
        open(type: DialogType) {
            this.type = type;
        }
    }
});

export default function useStore() {
    return store();
}

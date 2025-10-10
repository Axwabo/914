import type { DialogType } from "./types/dialogs.ts";
import { defineStore } from "pinia";
import type { ItemType } from "./types/item.ts";

interface State {
    dialogType: DialogType;
    outputs: ItemType | null;
}

const store = defineStore("dialogs", {
    state: (): State => ({ dialogType: "none", outputs: null }),
    actions: {
        showModal(type: DialogType) {
            this.dialogType = type;
        },
        openContextMenu(menu: HTMLDialogElement | null) {
            const current = document.querySelector("dialog.context-menu[open]") as HTMLDialogElement;
            if (current === menu)
                return;
            current?.close();
            menu?.show();
        },
        showOutputs(type: ItemType) {
            this.dialogType = "outputs";
            this.outputs = type;
        },
    }
});

export default function useStore() {
    return store();
}

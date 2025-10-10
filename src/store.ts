import type { DialogType } from "./types/dialogs.ts";
import { defineStore } from "pinia";

interface State {
    dialogType: DialogType;
}

const store = defineStore("dialogs", {
    state: (): State => ({ dialogType: "none" }),
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
        }
    }
});

export default function useStore() {
    return store();
}

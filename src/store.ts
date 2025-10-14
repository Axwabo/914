import { defineStore } from "pinia";
import type { DialogType, ItemPage } from "./types/dialogs.ts";
import type { ItemType } from "./types/item.ts";

interface State {
    dialogType: DialogType;
    itemPage: ItemPage;
    item: ItemType | null;
}

const store = defineStore("dialogs", {
    state: (): State => ({ dialogType: "none", itemPage: "outputs", item: null }),
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
        interact(type: ItemType) {
            if (this.dialogType === "none")
                this.itemPage = "outputs";
            this.dialogType = "item";
            this.item = type;
        }
    }
});

export default function useStore() {
    return store();
}

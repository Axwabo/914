import { defineStore } from "pinia";
import type { DialogType, ItemPage } from "./types/dialogs.ts";
import type { ItemType } from "./types/item.ts";
import type { Selecting } from "./types/selection.ts";

interface State {
    dialogType: DialogType;
    itemPage: ItemPage;
    item: ItemType | null;
    from: ItemType | null;
    to: ItemType | null;
    selecting: Selecting;
}

const store = defineStore("dialogs", {
    state: (): State => ({
        dialogType: "none",
        itemPage: "outputs",
        item: null,
        from: null,
        to: null,
        selecting: "none"
    }),
    actions: {
        showModal(type: DialogType) {
            this.dialogType = type;
        },
        interact(type: ItemType) {
            switch (this.selecting) {
                case "none":
                    break;
                case "from":
                    this.from = type;
                    this.selecting = "none";
                    return;
                case "to":
                    this.to = type;
                    this.selecting = "none";
                    return;
            }
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

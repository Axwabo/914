import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import useStore from "./store.ts";

createApp(App).use(createPinia()).mount("#app");

const { openContextMenu } = useStore();

window.addEventListener("click", e => {
    if (!(e.target as HTMLElement)?.matches("dialog.context-menu, dialog.context-menu *"))
        openContextMenu(null);
});

import { createPinia } from "pinia";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");

document.querySelector("#placeholder")?.remove();

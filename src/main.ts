import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead, HeadTag } from "@unhead/vue";

const head = createHead();
createApp(App).use(head).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {store, key} from "./store";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);

app.use(router);
app.use(store, key);

app.mount("#app");

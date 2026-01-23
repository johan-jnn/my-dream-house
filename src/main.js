import { createApp } from "vue";
import "./app.css";
import App from "./App.vue";
import routes from "./routes";

createApp(App).use(routes).mount("#app");

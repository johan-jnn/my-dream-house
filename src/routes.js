import { createMemoryHistory, createRouter } from "vue-router";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

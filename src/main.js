import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.content) {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", to.meta.description);
  }
  next();
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./core/http";
import helpers from "./core/helpers";

Vue.config.productionTip = false;
Vue.use(http);
Vue.use(helpers);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

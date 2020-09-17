import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import customVar from "./assets/variables/main.scss";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);
Vue.use(customVar);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

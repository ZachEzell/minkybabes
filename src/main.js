import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import VueSignature from "vue-signature-pad";

Vue.use(VueSignature);
Vue.use(router);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

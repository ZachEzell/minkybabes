import Vue from 'vue'
import App from './App.vue'
import VueSignature from 'vue-signature-pad';

Vue.use(VueSignature);

new Vue({
  el: '#app',
  render: h => h(App)
})

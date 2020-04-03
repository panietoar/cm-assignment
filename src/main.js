import Vue from "vue";
import App from "./App.vue";

import "./lib/fiters";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

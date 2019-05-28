import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
axios.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": " application/json"
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
// import VueSimplemde from "vue-simplemde";
// import "simplemde/dist/simplemde.min.css";
// Vue.use(VueSimplemde);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

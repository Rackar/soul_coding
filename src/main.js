import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
// var token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjExIiwibW9iaWxlIjoiMTMzNDQ0NDU1NTUiLCJ1c2VyaWQiOiI1Y2VkM2M0ZGZiY2U1YzM5YTg1ZWZkNWEiLCJpYXQiOjE1NTkwNTEzNjgsImV4cCI6MTU1OTEzNzc2OH0.gLOPB638YjPvLRqhq2lKrlKcKeTl2bFfjQh92PfYUKk";
// axios.defaults.headers.common["Authorization"] = token;
axios.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": " application/json"
      // Authorization: token
    };
    // config.headers[] = localStorage.token;
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

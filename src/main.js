import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
// var token = window.localStorage.getItem("token");
//请求拦截。所有http请求增加token
axios.interceptors.request.use(
  config => {
    config.headers = {
      "Content-Type": " application/json"
    };
    if (store.state.token) {
      config.headers.Authorization = `${store.state.token}`;
    }
    // config.headers[] = localStorage.token;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  function(response) {
    // 用户信息是否超时，重定向到登录页面
    // debugger;
    if (response.data.status === 0) {
      localStorage.clear();
      router.replace({
        path: "/p/jianshu/login",
        query: { redirect: router.currentRoute.fullPath }
      });
    }
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
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

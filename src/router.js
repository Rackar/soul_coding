import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/calc/index.vue")
      // redirect: "/calc"
      // name: "menu",
      // component: () => import("./views/main.vue")
    }
  ]
});

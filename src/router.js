import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // redirect: "/p"
      name: "menu",
      component: () => import("./views/main.vue")
    },
    {
      path: "/p",
      name: "p",
      component: () => import("./views/layout.vue"),
      children: [
        {
          path: "love",
          name: "love",
          component: () => import("./views/soul/love.vue")
        },
        {
          path: "About",
          name: "About",
          component: () => import("./views/soul/About.vue")
        },
        {
          path: "resume",
          name: "resume",
          component: () => import("./views/soul/resume.vue")
        },
        {
          path: "productlist",
          name: "productlist",
          component: () => import("./views/soul/productList/list.vue")
        },
        {
          path: "trello",
          name: "trello",
          component: () => import("./views/soul/trello/index.vue")
        },
        {
          path: "jianshu",
          name: "jianshu",
          component: () => import("./views/soul/jianshu.vue")
        }
      ]
    }
  ]
});

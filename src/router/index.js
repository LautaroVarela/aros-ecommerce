/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/earrings',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobremi',
      name: 'About',
      component: About
    },
    {
      path: '/productos',
      name: 'Products',
      component: Products
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      if (to.hash) {
        position.selector = to.hash;
      }
    }
  }
});

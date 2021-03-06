import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/Home.vue';
import ComponentDoc from '../views/componentDoc/componentDoc.vue';
import { childrenRoutes } from '../config/router.config';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/componentDoc',
    name: 'ComponentDoc',
    component: ComponentDoc,
    children: childrenRoutes
  }
]

const router = new VueRouter({
  routes,
});

export default router;

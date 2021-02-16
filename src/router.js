import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/home', component: () => import('./components/Home.vue') },
      { path: '/profile', component: () => import('./components/Profile.vue') },
      { path: '*', component: () => import('./components/404.vue') },
    ]
  })
}

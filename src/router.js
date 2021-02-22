import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import(/* webpackChunkName: "home" */ './components/Home.vue');
const Profile = () => import(/* webpackChunkName: "profile" */ './components/Profile.vue');
const NotFound = () => import(/* webpackChunkName: "404" */ './components/404.vue');

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/home', component: Home },
      { path: '/profile', component: Profile },
      { path: '*', component: NotFound },
    ]
  })
}

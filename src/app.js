import Vue from 'vue';
import App from './components/App.vue';
import createRouter from './router';
import createStore from './store';

import 'swiper/swiper-bundle.css';
import './assets/global.css';

export default function createApp(context) {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    render: h => h(App),
    router,
    store
  });
  return { app, router, store }
}

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function randomNumberInNseconds(second) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10));
    }, 1000 * second);
  });
}

function randomNumberInNseconds10x(second) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 1000 * second);
  });
}

export default function createStore() {
  return new Vuex.Store({
    state: () => {
      return {
        counter: 0,
        counter10x: 0
      }
    },
    actions: {
      change ({ commit }) {
        return randomNumberInNseconds(1).then(result => {
          commit('change', result);
        })
      },
      change10x ({ commit }) {
        return randomNumberInNseconds10x(1).then(result => {
          commit('change10x', result);
        })
      }
    },
    mutations: {
      change(state, num) {
        state.counter = num;
      },
      change10x(state, num) {
        state.counter10x = num;
      }
    }
  })
}

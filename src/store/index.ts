import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface Token {
  exp: number;
  name: string;
}

export interface State {
  token: Token | null;
}

const auth = {
  login(): Promise<Token> {
    return Promise.resolve({
      name: 'John Doe',
      exp: 2651687175867,
    });
  },
};

export const key: InjectionKey<Store<State>> = Symbol('Store');

export const useStore = () => baseUseStore(key);

export default createStore<State>({
  state: {
    token: null,
  },
  getters: {
    isExpired(state) {
      if (state.token) {
        return state.token.exp < Date.now();
      }

      return true;
    },
  },
  mutations: {
    setToken(state, token: Token) {
      state.token = token;
    },
    resetToken(state) {
      state.token = null;
    },
  },
  actions: {
    async login({ commit }) {
      const token = await auth.login();

      commit('setToken', token);
    },
    logout({ commit }) {
      commit('resetToken');
    },
  },
});

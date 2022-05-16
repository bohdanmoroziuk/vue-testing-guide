import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export interface Token {
  name: string;
}

export interface State {
  token: Token | null;
}

const auth = {
  login(): Promise<Token> {
    return Promise.resolve({
      name: 'John Doe',
    });
  },
  logout(): Promise<void> {
    return Promise.resolve();
  },
};

export const key: InjectionKey<Store<State>> = Symbol('Store');

export const useStore = () => baseUseStore(key);

export default createStore<State>({
  state: {
    token: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    username(state) {
      return state.token?.name;
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
    async logout({ commit }) {
      await auth.logout();

      commit('resetToken');
    },
  },
});

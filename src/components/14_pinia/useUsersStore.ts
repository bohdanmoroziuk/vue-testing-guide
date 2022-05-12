import { defineStore } from 'pinia';

import { getUsers, deleteUser } from './api';

export interface User {
  id: string;
  name: string;
}

export interface UsersState {
  users: User[];
  error: Error | null;
  isLoading: boolean;
}

export const useUsersStore = defineStore('users', {
  state(): UsersState {
    return {
      users: [],
      error: null,
      isLoading: false,
    };
  },
  getters: {
    usersQuantity(state: UsersState) {
      return state.users.length;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        this.error = null;

        this.users = await getUsers();
      } catch (error) {
        this.users = [];
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
    async deleteUser(id: string) {
      try {
        this.isLoading = true;
        this.error = null;

        await deleteUser(id);

        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        this.error = error as Error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

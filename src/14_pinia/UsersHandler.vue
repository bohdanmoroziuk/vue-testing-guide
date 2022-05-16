<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUsersStore } from './useUsersStore';

const store = useUsersStore();

const {
  users,
  usersQuantity,
  isLoading,
  error,
} = storeToRefs(store);

const getUsers = async () => {
  await store.fetchUsers();
};

const deleteUser = async (id: string) => {
  await store.deleteUser(id);
};
</script>

<template>
  <div style="padding: 2rem 0;">
    <button @click="getUsers">
      Load users
    </button>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>
    <div v-else>
      <div>
        Users: {{ usersQuantity }}
      </div>
      <ul
        v-for="user of users"
        :key="user.id"
      >
        <li class="user-item">
          <span>
            {{ user.name }}
          </span>
          <button @click="deleteUser(user.id)" class="delete-user-button">
            X
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

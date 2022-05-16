<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '.';

const store = useStore();

const isLoggedIn = computed(() => store.getters.isLoggedIn);

const username = computed(() => store.getters.username);

const handleLogin = async () => {
  await store.dispatch('login');
};

const handleLogout = async () => {
  await store.dispatch('logout');
};
</script>

<template>
  <div style="padding: 2rem 0;">
    <div v-if="isLoggedIn">
      <div>
        username: {{ username }}
      </div>
      <button id="logout" type="button" @click="handleLogout">
        Logout
      </button>
    </div>
    <div v-else>
      <button id="login" type="button" @click="handleLogin">
        Login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { getUsers } from '@/components/09_async-behavior/api';

interface User {
  id: number;
  name: string;
}

const users = ref<User[]>([]);

users.value = await getUsers();
</script>

<template>
  <ul>
    <li
      v-for="user of users"
      :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

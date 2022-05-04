<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Props {
  isAdmin: boolean;
}

defineProps<Props>();

const shouldShowDropdown = ref(false);

const toggleDropdown = () => {
  shouldShowDropdown.value = !shouldShowDropdown.value;
};
</script>

<template>
  <nav>
    <a id="profile" href="/profile">Profile</a>
    <a id="admin" href="/admin" v-if="isAdmin">Admin</a>
    <button @click="toggleDropdown">Actions</button>
    <ul id="dropdown" v-show="shouldShowDropdown">
      <li>
        <button>Logout</button>
      </li>
    </ul>
  </nav>
</template>

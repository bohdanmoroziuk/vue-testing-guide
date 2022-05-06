<script setup lang="ts">
import { ref, defineEmits } from 'vue';

interface Credentials {
  email: string;
  password: string;
}

interface Emits {
  (event: 'login', payload: Credentials): void;
}

const emits = defineEmits<Emits>();

const credentials = ref<Credentials>({
  email: '',
  password: '',
});

const error = ref<string>('');

const submit = () => {
  if (credentials.value.email === '' || credentials.value.password === '') {
    error.value = 'Please fill in all fields';
    return;
  }

  emits('login', credentials.value);
  error.value = '';
};
</script>

<template>
  <form @submit.prevent="submit">
    <input
      id="email"
      type="email"
      aria-label="Email"
      v-model.trim="credentials.email"
    />
    <input
      id="password"
      type="password"
      aria-label="Password"
      v-model.trim="credentials.password"
    />
    <p v-if="error">{{ error }}</p>
    <button type="submit">Log in</button>
  </form>
</template>

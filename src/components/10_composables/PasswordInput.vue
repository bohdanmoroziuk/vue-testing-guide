<script setup lang="ts">
import { ref } from 'vue';

import usePasswordVisibility from '@/components/10_composables/usePasswordVisibility';

const { toggle, type, label } = usePasswordVisibility();

const password = ref('');
</script>

<template>
  <div class="password-input">
    <input v-model.trim="password" :type="type" aria-label="Password" />
    <button type="button" @click="toggle">
      {{ label }}
    </button>
  </div>
</template>

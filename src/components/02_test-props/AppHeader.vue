<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <header class="app-header">
    <h1 class="title">
      {{ title }}
    </h1>
  </header>
</template>

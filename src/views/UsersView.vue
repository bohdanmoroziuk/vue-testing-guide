<script setup lang="ts">
import UserList from '@/components/09_async-behavior/UserList.vue';
</script>

<template>
  <div>
    <Suspense>
      <UserList />
      <template #fallback>
        Loading users...
      </template>
    </Suspense>
  </div>
</template>

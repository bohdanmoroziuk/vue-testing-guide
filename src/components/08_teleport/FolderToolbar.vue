<script setup lang="ts">
import { ref } from 'vue';

import AddFolderModal from '@/components/08_teleport/AddFolderModal.vue';

const isShown = ref(false);

const toggle = () => {
  isShown.value = !isShown.value;
};

const addFolder = (folderName: string) => {
  console.log('added folder', folderName);
};
</script>

<template>
  <div>
    <button @click="toggle">
      Add folder
    </button>

    <Teleport to="#modal">
      <AddFolderModal :is-shown="isShown" @add-folder="addFolder" />
    </Teleport>
  </div>
</template>

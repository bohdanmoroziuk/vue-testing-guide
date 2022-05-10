<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

interface Props {
  isShown: boolean;
}

interface Emits {
  (event: 'add-folder', payload: string): void;
}

defineProps<Props>();

const emits = defineEmits<Emits>();

const folderName = ref('');

const handleFolderAdd = () => {
  if (folderName.value) {
    emits('add-folder', folderName.value);
    folderName.value = '';
  }
};
</script>

<template>
  <div v-if="isShown">
    <form @submit.prevent="handleFolderAdd">
      <input type="text" v-model.trim="folderName" aria-label="Folder name" />
      <button type="submit">
        Add folder
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface Props {
  isAuthenticated: boolean;
}

const props = defineProps<Props>();

const router = useRouter();
const route = useRoute();

const postId = computed(() => route.params.id);

const redirect = () => {
  if (props.isAuthenticated) {
    router.push({
      name: 'edit-post',
      params: {
        id: postId.value,
      },
    });
  } else {
    router.push({ name: '403' });
  }
};
</script>

<template>
  <button
    class="click-to-edit-post-button"
    type="button"
    @click="redirect"
  >
    Click to edit
  </button>
</template>

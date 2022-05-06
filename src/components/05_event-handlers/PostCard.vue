<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Post {
  id: string;
  title: string;
  content: string;
}

interface Props {
  post: Post;
}

interface Emits {
  (event: 'delete', payload: string): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const handlePostDelete = () => {
  emits('delete', props.post.id);
};
</script>

<template>
  <article>
    <header>
      <h3>{{ post.title }}</h3>
    </header>
    <main>
      <p>{{ post.content }}</p>
    </main>
    <footer>
      <button @click="handlePostDelete">
        Delete
      </button>
    </footer>
  </article>
</template>

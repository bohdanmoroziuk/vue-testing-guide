<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

const toggle = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="dropdown">
    <button @click="toggle">
      {{ show ? 'Hide' : 'Show' }}
    </button>
    <transition name="fade">
      <ul class="content" v-if="show">
        <li>Action 1</li>
        <li>Action 2</li>
        <li>Action 3</li>
      </ul>
    </transition>
  </div>
</template>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

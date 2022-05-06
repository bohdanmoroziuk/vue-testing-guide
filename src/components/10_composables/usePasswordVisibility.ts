import { ref, computed } from 'vue';

export default function usePasswordVisibility() {
  const isVisible = ref(false);

  const toggle = () => {
    isVisible.value = !isVisible.value;
  };

  const label = computed(() => (isVisible.value ? 'Hide' : 'Show'));

  const type = computed(() => (isVisible.value ? 'text' : 'password'));

  return {
    isVisible,
    toggle,
    label,
    type,
  };
}

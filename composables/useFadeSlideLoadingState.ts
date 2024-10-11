export function useFadeSlideLoadingState() {
  const loaded = ref(false);
  onMounted(() => (loaded.value = true));
  onUnmounted(() => (loaded.value = false));

  return { loaded };
}

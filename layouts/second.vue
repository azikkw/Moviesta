<template>
  <div class="w-full h-screen flex flex-col bg-back-color-2">
    <slot/>
  </div>
</template>

<script setup>

  const router = useRouter();

  onMounted(async () => {
    if(!localStorage.getItem('moviesta-user')) {
      await router.replace('/login');
    }
  });

</script>

<style scoped>

</style>
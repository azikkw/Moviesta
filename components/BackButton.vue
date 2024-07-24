<template>
  <button @click="router.back()" class="back-btn" aria-label="Back btn"><Icon name="solar:undo-left-round-broken"/></button>
</template>

<script setup>
  const router = useRouter();
</script>

<style scoped>
  /* Back button */
  .back-btn {
    @apply absolute left-[15px] sm:left-10 lg:left-16 top-7 sm:top-12 z-[2] w-[38px] sm:w-[50px] lg:w-[38px] h-[38px] sm:h-[50px] lg:h-[38px] bg-[#FFFFFF3C] rounded-[50%] flex justify-center items-center backdrop-blur-[3px] lg:hover:bg-[#FFFFFF4C] transition-all duration-200;
  }
  .back-btn span {
    @apply size-6 sm:size-[30px] lg:size-6 mt-[3px];
  }
</style>
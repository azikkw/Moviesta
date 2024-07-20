<template>
  <div class="collection-page">
    <p class="title">Favorites</p>
    <div class="movies-list">
      <p v-show="favorites.length === 0" class="ml-2.5">- Here will be your favorite movies!</p>
      <FavoriteCard v-for="movie in favorites" :movie="movie" />
    </div>
  </div>
</template>

<script setup>

  import { ref } from "vue";

  useHead({
    title: 'Favorites | Moviesta',
  });

  const favorites = ref([]);

  onMounted(async () => {
    favorites.value = await getFavorites();
    onUnmounted(async () => {
      favorites.value = await getFavorites();
    });
  });

</script>

<style scoped>

</style>
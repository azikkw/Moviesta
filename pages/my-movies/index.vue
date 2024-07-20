<template>
  <div class="collection-page">
    <p class="title">My Movies</p>
    <div class="movies-list">
      <NuxtLink to="/create-movie" class="create-movie-btn">Create Movie</NuxtLink>
      <MyMovieCard v-for="movie in myMovies" :movie="movie" />
    </div>
  </div>
</template>

<script setup>

  import { ref } from "vue";

  useHead({
    title: 'My movies | Moviesta',
  });

  const myMovies = ref([]);

  onMounted(async () => {
    myMovies.value = await getMyMovies();
  });

</script>

<style scoped>

</style>
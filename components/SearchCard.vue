<template>
  <NuxtLink :to="`/movies/${movie.id}`">
    <NuxtImg loading="lazy" :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" alt="Search Image" />
    <div class="result-movie-info">
      <p>{{movie.title}}</p>
      <p>{{movie.release_date.slice(0, 4)}}</p>
    </div>
    <Rating :rating="movie.vote_average" />
  </NuxtLink>
</template>

<script setup>
  const { movie } = defineProps(['movie']);
</script>

<style scoped>

</style>
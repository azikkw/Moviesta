<template>
  <NuxtLink :to="`/my-movies/${movie.id}`" class="movie-card">
    <NuxtImg class="movie-card-img" loading="lazy" :src="`${movie.poster_path}`" alt="My movie movie" />
    <div class="movie-card-info">
      <p class="movie-card-name">{{movie.title}}</p>
      <p class="movie-card-year">{{movie.release_date.slice(0, 4)}}</p>
      <Rating :rating="movie.rating" />
    </div>
    <Icon name="solar:alt-arrow-right-line-duotone"></Icon>
  </NuxtLink>
</template>

<script setup>
  const { movie } = defineProps(['movie']);
</script>

<style scoped>

</style>
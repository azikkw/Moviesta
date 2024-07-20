<template>
  <NuxtLink :to="`/movies/${movie.id}`" class="movie-card">
    <picture class="h-full flex items-center">
      <source :srcset="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`" media="(min-width: 640px)">
      <source :srcset="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" media="(max-width: 639px)">
      <NuxtImg class="movie-card-img" loading="lazy" :src="`https://image.tmdb.org/t/p/w780${movie.poster_path}`" alt="Favorite movie" media="(max-width: 1023px)" />
    </picture>
    <div class="movie-card-info">
      <p class="movie-card-name">{{movie.title}}</p>
      <p class="movie-card-year">{{movie.release_date.slice(0, 4)}}</p>
      <div class="flex gap-1"><Rating :rating="movie.vote_average" /><p class="rates-count">{{movie.vote_count}}</p></div>
    </div>
    <Icon name="solar:alt-arrow-right-line-duotone"></Icon>
  </NuxtLink>
</template>

<script setup>
  const { movie } = defineProps(['movie']);
</script>

<style scoped>

</style>
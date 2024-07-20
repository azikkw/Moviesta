<template>
  <NuxtLink :to="`/movies/${movie.id}`" class="home-card">
    <picture class="w-full h-full">
      <source :srcset="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`" media="(min-width: 1024px)">
      <source :srcset="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" media="(max-width: 1023px)">
      <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="`https://image.tmdb.org/t/p/w780${movie.poster_path}`" alt="Favorite movie" media="(max-width: 1023px)" />
    </picture>
    <div class="home-card-info">
      <p class="home-card-name">{{movie.title}}</p>
      <Rating :rating="movie.vote_average" />
    </div>
  </NuxtLink>
</template>

<script setup>
  const { movie } = defineProps(['movie']);
</script>

<style scoped>

</style>
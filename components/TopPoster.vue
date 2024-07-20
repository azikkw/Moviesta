<template>
  <div class="top-movie">
    <div class="top-movie-left"></div>
    <picture class="top-movie-poster">
      <source :srcset="`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`" media="(min-width: 1024px)">
      <source :srcset="`https://image.tmdb.org/t/p/original${movie.poster_path}`" media="(max-width: 1023px)">
      <NuxtImg class="movie-card-img" loading="lazy" decoding="auto" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="Favorite movie" media="(max-width: 1023px)" />
    </picture>
    <div class="top-movie-info">
      <p class="top-movie-title">{{movie.title}}</p>
      <p class="top-movie-desc">{{movie.overview}}</p>
      <div class="top-movie-add-info"><Rating :rating="movie.vote_average" /><p class="top-movie-year">{{movie.release_date.slice(0, 4)}}</p></div>
      <NuxtLink :to="`/movies/${movie.id}`" class="more-btn" aria-label="More info btn">More Info</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { movie } = defineProps(['movie']);
</script>

<style scoped>

</style>
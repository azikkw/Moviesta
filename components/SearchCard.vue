<template>
  <NuxtLink :to="`/movies/${movie.id}`" class="result-card">
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

  .result-card {
    @apply flex items-center gap-4 sm:gap-5 lg:gap-4 mb-[15px];
  }
  .result li:last-child a {
    @apply mb-[100px] lg:mb-0;
  }
  .result-card img {
    @apply w-[52px] sm:w-[70px] lg:w-[52px] h-auto;
  }
  .result-movie-info {
    @apply flex-1 overflow-hidden font-medium lg:font-normal;
  }
  .result-movie-info p:first-child {
    @apply text-[17px] sm:text-[19px] lg:text-[17px] overflow-hidden overflow-ellipsis whitespace-nowrap;
  }
  .result-movie-info p:last-child {
    @apply opacity-70 sm:text-[17px] lg:text-[16px];
  }

</style>
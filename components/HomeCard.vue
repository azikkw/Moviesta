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

  .home-card {
    @apply flex flex-col relative w-[150px] sm:w-[210px] lg:w-[340px] h-auto lg:h-[200px] lg:hover:-translate-y-2 lg:transition-all lg:duration-300;
  }
  .home-card-name {
    @apply w-full lg:text-end text-[15px] sm:text-xl lg:text-lg leading-[1.4] font-medium lg:absolute lg:right-0 lg:bottom-0 lg:backdrop-blur-[1.5px] lg:px-4 lg:pb-2 pt-1;
  }

</style>
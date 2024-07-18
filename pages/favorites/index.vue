<template>
  <div class="favorites-page">
    <p class="title">Favorites</p>
    <div class="movies-list">
      <NuxtLink to="/movies/76600" class="movie-card">
        <picture class="h-full flex items-center">
          <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
          <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
          <NuxtImg class="movie-card-img" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
        </picture>
        <div class="movie-card-info">
          <p class="movie-card-name">Avatar: The Way of Water</p>
          <p class="movie-card-year">2022</p>
          <div class="flex gap-1"><p class="movie-rating card">7.6</p><p class="rates-count">1080</p></div>
        </div>
        <Icon name="solar:alt-arrow-right-line-duotone"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
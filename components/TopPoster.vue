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

  /* Home page top movie poster styles */
  .top-movie {
    @apply h-[calc(100vh-220px)] sm:h-[calc(100vh-320px)] lg:h-[calc(100vh-120px)] flex flex-col lg:flex-row relative;
  }
  .top-movie:after {
    content: "";
    @apply bg-[#1a1f2b] w-full h-[1px] absolute left-0 bottom-0 z-[5];
  }
  .top-movie-left {
    @apply w-full lg:w-[40%] xl:w-[30%] h-[110px] sm:h-[140px] lg:h-full absolute left-0 bottom-0 lg:relative bg-back-color-1 shadow-poster-phone lg:shadow-poster-pc;
  }
  .top-movie-poster {
    @apply h-full;
  }
  .top-movie-poster img {
    @apply w-full h-full object-cover;
  }
  .top-movie-info {
    @apply w-full lg:w-[45%] xl:w-[35%] h-full absolute left-0 top-0 px-[15px] sm:px-9 pb-10 sm:pb-[70px] lg:p-0 lg:pl-16 lg:py-16 flex flex-col items-center lg:items-start justify-end lg:justify-center;
  }
  .top-movie-title {
    @apply text-center lg:text-start text-[23px] sm:text-[30px] lg:text-[25px] xl:text-[30px] leading-[1.4] font-medium mb-6 sm:mb-7 order-2 lg:order-1;
  }
  .top-movie-desc {
    @apply hidden lg:block text-[15px] lg:text-[14px] xl:text-[15px] opacity-70 mb-4 order-2;
  }
  .top-movie-add-info {
    @apply flex gap-2.5 text-[17px] sm:text-xl lg:text-[16px] xl:text-[17px] mb-1 lg:mb-0 order-1 lg:order-3;
  }
  .top-movie-rating {
    @apply text-green-500 font-bold;
  }
  .top-movie-year {
    @apply font-medium opacity-85;
  }
  .more-btn {
    @apply w-fit !px-16 lg:!px-14 xl:!px-16 !py-[13px] lg:!py-3 xl:!py-[13px] !text-[19px] sm:!text-[23px] lg:!text-lg xl:!text-[19px] lg:mt-8 xl:mt-9 order-3;
  }

</style>
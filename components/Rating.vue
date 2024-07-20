<template>
  <p class="movie-rating" :class="{'r-red': rating <= 5.9, 'r-silver': rating >= 6 && rating <= 6.9, 'r-green': rating >= 7 && rating <= 7.9, 'r-gold': rating >= 8}">
    {{parseFloat(rating.toFixed(1))}}
  </p>
</template>

<script setup>
  const { rating } = defineProps(['rating']);
</script>

<style scoped>

  /* Movie rating */
  .movie-rating {
    @apply w-fit font-bold bg-green-500 text-white;
  }
  .movie-top .movie-rating {
    @apply px-2 sm:px-3 text-[15px] sm:text-[17px] mb-2;
  }
  .home-page .movie-rating {
    @apply absolute left-2 sm:left-2.5 top-2 sm:top-2.5 px-[5px] sm:px-2.5 text-[14px] sm:text-[17px] lg:text-[15px] leading-[1.45];
  }
  .collection-page .movie-rating {
    @apply sm:absolute sm:left-2.5 sm:top-2.5 px-0 sm:px-2 lg:px-2.5 text-[15px] md:text-[16px] lg:text-[15px] text-green-500 sm:text-white bg-transparent sm:bg-green-500 opacity-90 sm:opacity-100 leading-[1.6] sm:leading-[1.45];
  }
  .result .movie-rating {
    @apply bg-transparent text-[17px] sm:text-xl lg:text-[16px] text-green-500 ml-5;
  }
  .top-movie .movie-rating {
    @apply bg-transparent text-green-500 font-bold;
  }
  /* Rating value */
  .collection-page .movie-rating.r-red {
    @apply text-red-500 sm:bg-red-500 sm:text-white;
  }
  .collection-page .movie-rating.r-silver {
    @apply text-[#A1A1A1] sm:bg-[#959595] sm:text-white;
  }
  .collection-page .movie-rating.r-gold {
    @apply text-[#EACC7F] sm:bg-[#EACC7F] sm:text-black;
  }
  .home-page .movie-rating.r-red,
  .movie-top .movie-rating.r-red {
    @apply bg-red-500;
  }
  .home-page .movie-rating.r-silver,
  .movie-top .movie-rating.r-silver {
    @apply bg-[#959595];
  }
  .home-page .movie-rating.r-gold,
  .movie-top .movie-rating.r-gold {
    @apply bg-[#EACC7F] text-black font-bold;
  }
  .result .movie-rating.r-red,
  .top-movie .movie-rating.r-red {
    @apply text-red-500;
  }
  .result .movie-rating.r-silver,
  .top-movie .movie-rating.r-silver {
    @apply text-[#A1A1A1];
  }
  .result .movie-rating.r-gold,
  .top-movie .movie-rating.r-gold {
    @apply text-[#EACC7F];
  }

</style>
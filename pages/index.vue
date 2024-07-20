<template>
  <div>
    <TopPoster :movie="trending.randomTrendingMovie" />
    <div class="home-page relative z-[5]">
      <div class="home-list">
        <p class="home-title">Top Rated</p>
        <button class="top-rated-prev swp-btn" aria-label="Prev button">
          <Icon name="solar:alt-arrow-left-line-duotone" size="50" />
        </button>
        <button class="top-rated-next swp-btn" aria-label="Next button">
          <Icon name="solar:alt-arrow-right-line-duotone" size="50" />
        </button>
        <Swiper
            ref="topRatedSwiper"
            :slides-per-view="'auto'"
            :space-between="10"
            :navigation="{ nextEl: '.top-rated-next', prevEl: '.top-rated-prev' }"
            :free-mode="true"
            @swiper="onTopRatedSwiper"
            class="top-rated-swiper"
        >
          <SwiperSlide v-for="(movie, index) in topRated.results" :key="index">
            <HomeCard :movie="movie" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="home-list">
        <p class="home-title">Popular movies</p>
        <button class="popular-prev swp-btn" aria-label="Prev button">
          <Icon name="solar:alt-arrow-left-line-duotone" size="50" />
        </button>
        <button class="popular-next swp-btn" aria-label="Next button">
          <Icon name="solar:alt-arrow-right-line-duotone" size="50" />
        </button>
        <Swiper
            ref="popularSwiper"
            :slides-per-view="'auto'"
            :space-between="10"
            :navigation="{ nextEl: '.popular-next', prevEl: '.popular-prev' }"
            :free-mode="true"
            @swiper="onPopularSwiper"
            class="popular-swiper"
        >
          <SwiperSlide v-for="(movie, index) in popular.results" :key="index">
            <HomeCard :movie="movie" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="home-list">
        <p class="home-title">Trending</p>
        <button class="trending-prev swp-btn" aria-label="Prev button">
          <Icon name="solar:alt-arrow-left-line-duotone" size="50" />
        </button>
        <button class="trending-next swp-btn" aria-label="Next button">
          <Icon name="solar:alt-arrow-right-line-duotone" size="50" />
        </button>
        <Swiper
            ref="trendingSwiper"
            :slides-per-view="'auto'"
            :space-between="10"
            :navigation="{ nextEl: '.trending-next', prevEl: '.trending-prev' }"
            :free-mode="true"
            @swiper="onTrendingSwiper"
            class="trending-swiper"
        >
          <SwiperSlide v-for="(movie, index) in trending.trendingList.results" :key="index">
            <HomeCard :movie="movie" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>

  import SwiperCore from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, FreeMode } from "swiper/modules";

  // Activating swiper modules
  SwiperCore.use([Navigation, FreeMode]);

  // Fetching movie lists
  const { data: topRated } = await useFetch(`/api/movie/top_rated`);
  const { data: popular } = await useFetch(`/api/movie/popular`);
  const { data: trending } = await useFetch(`/api/trending/movie`);

  // Swiper configuration
  const topRatedSwiper = ref(null);
  const popularSwiper = ref(null);
  const trendingSwiper = ref(null);

  const onTopRatedSwiper = (swiper) => {
    topRatedSwiper.value = swiper;
  };
  const onPopularSwiper = (swiper) => {
    popularSwiper.value = swiper;
  };
  const onTrendingSwiper = (swiper) => {
    trendingSwiper.value = swiper;
  };

</script>

<style scoped>

</style>
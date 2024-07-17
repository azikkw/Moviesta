<template>
  <div class="top-movie">
    <div class="top-movie-left"></div>
    <picture class="top-movie-poster">
      <source :srcset="'https://image.tmdb.org/t/p/original/dn3gbDpXPSwC6saMJOHkCiFA9jn.jpg'" media="(min-width: 1024px)">
      <source :srcset="'https://image.tmdb.org/t/p/original/dwxWNJ9oDLqNPbA0884h5J7mfqy.jpg'" media="(max-width: 1023px)">
      <NuxtImg class="movie-card-img" loading="lazy" :src="'https://image.tmdb.org/t/p/original/dwxWNJ9oDLqNPbA0884h5J7mfqy.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
    </picture>
    <div class="top-movie-info">
      <p class="top-movie-title">Descendants: The Rise of Red</p>
      <p class="top-movie-desc">After the Queen of Hearts incites a coup on Auradon, her rebellious daughter Red and Cinderella's perfectionist daughter Chloe join forces and travel back in time to try to undo the traumatic event that set Red's mother down her villainous path.</p>
      <div class="top-movie-add-info"><p class="top-movie-rating">7.3</p><p class="top-movie-year">2024</p></div>
      <NuxtLink to="/movies/5" class="more-btn" aria-label="Watch trailer btn">More Info</NuxtLink>
    </div>
  </div>
  <div class="home-page relative z-[5]">
    <div class="trending">
      <p class="home-title">Trending</p>
      <div class="trending-prev">
      </div>
      <div class="trending-next">
      </div>
      <Swiper
        ref="trendingSwiper"
        :slides-per-view="'auto'"
        :space-between="15"
        :navigation="{ nextEl: '.trending-next', prevEl: '.trending-prev' }"
        :free-mode="true"
        @swiper="onTrendingSwiper"
        class="trending-swiper"
      >
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/movies/5" class="home-card">
            <picture class="w-full h-full">
              <source :srcset="'https://image.tmdb.org/t/p/w780/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 640px)">
              <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 639px)">
              <NuxtImg class="w-full h-full object-cover rounded-[1px]" loading="lazy" :src="'https://image.tmdb.org/t/p/w780/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="Favorite movie" media="(max-width: 1023px)" />
            </picture>
            <div class="home-card-info">
              <p class="home-card-name">Avatar: The Way of Water</p>
              <p class="home-card-rating">7.6</p>
            </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>

  import SwiperCore from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, FreeMode } from "swiper/modules";

  // Activating swiper modules
  SwiperCore.use([Navigation, FreeMode]);

  // Swiper configuration
  const trendingSwiper = ref(null);

  const onTrendingSwiper = (swiper) => {
    trendingSwiper.value = swiper;
  };

</script>

<style scoped>

</style>
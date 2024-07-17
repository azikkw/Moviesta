<template>
  <div class="movie-page">
    <NuxtLink to="/" class="back-btn"><Icon name="solar:undo-left-round-broken"/></NuxtLink>
    <div class="movie-top">
      <span class="movie-rating">7.6</span>
      <p class="movie-title">Avatar: The Way of Water</p>
      <ul class="movie-genres">
        <li>Science Fiction</li>
        <li>Adventure</li>
        <li>Action</li>
      </ul>
      <div class="movie-actions">
        <button @click="openTrailer" class="trailer-btn" aria-label="Watch trailer btn">Watch Trailer</button>
        <button @click="checkForFavorites" class="add-favorite-btn" :class="{'active': inFavorites}" aria-label="Add favorite btn"><Icon name="solar:bookmark-bold"/></button>
      </div>
      <div class="poster-shadow"></div>
    </div>
    <div class="movie-bottom">
      <ul class="movie-info">
        <li class="font-medium">2022</li>
        <li class="movie-age">13+</li>
        <li>2h 15m</li>
      </ul>
      <p class="movie-description">Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
      <ul class="movie-additional-info">
        <li ref="phoneTrailer" class="movie-trailer">
          Movie Trailer
          <iframe src="https://www.youtube.com/embed/d9MyW72ELq0" allowfullscreen/>
        </li>
        <li>Country<p>United States of America</p></li>
      </ul>
    </div>
    <picture class="movie-poster">
      <source :srcset="'https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg'" media="(min-width: 1024px)">
      <source :srcset="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" media="(max-width: 1023px)">
      <NuxtImg class="movie-poster" preload :src="'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'" alt="poster"/>
    </picture>
    <div @click="closeTrailer" class="movie-trailer larger" :class="{'active': isOpened}">
      <iframe src="https://www.youtube.com/embed/d9MyW72ELq0" allowfullscreen/>
    </div>
    <footer class="bg-back-color-2">
      <a href="https://github.com/azikkw/Moviesta" target="_blank">2024 <Icon name="mdi:github" size="25px"/> azikkw</a>
    </footer>
  </div>
</template>

<script setup>

  import { ref } from 'vue';

  const phoneTrailer = ref(null);
  const isOpened = ref(false);

  const inFavorites = ref(false);

  definePageMeta({
    layout: 'movie'
  });
  useHead({
    title: 'Avatar: The Way of Water',
    meta: [
      { name: 'description', content: 'Avatar: The Way of Water' }
    ]
  });

  // Trailer window options
  const openTrailer = () => {
    if(window.innerWidth > 1024) {
      isOpened.value = true;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Smooth scrolling to trailer on phone/tablet
      phoneTrailer?.value.scrollIntoView({behavior: 'smooth'});
    }
  }
  const closeTrailer = () => {
    isOpened.value = false;
    document.body.style.overflow = '';
  }

  // Checking for movie in favorites
  const checkForFavorites = () => {
    inFavorites.value = !inFavorites.value;
  }

</script>

<style scoped>

</style>
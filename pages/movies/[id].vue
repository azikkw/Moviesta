<template>
  <div class="movie-page">
    <button @click="router.back()" class="back-btn" aria-label="Back btn"><Icon name="solar:undo-left-round-broken"/></button>
    <div class="movie-top">
      <span class="movie-rating">{{parseFloat(movie.vote_average.toFixed(1))}}</span>
      <p class="movie-title">{{movie.title}}</p>
      <ul class="movie-genres">
        <li v-for="genre in movie.genres">{{genre.name}}</li>
      </ul>
      <div class="movie-actions">
        <button @click="openTrailer" class="trailer-btn" aria-label="Watch trailer btn">Watch Trailer</button>
        <button @click="toggleFavorite" class="add-favorite-btn" :class="{'active': inFavorites}" aria-label="Add favorite btn"><Icon name="solar:bookmark-bold"/></button>
      </div>
      <div class="poster-shadow"></div>
    </div>
    <div class="movie-bottom">
      <ul class="movie-info">
        <li class="font-medium">{{movie.release_date.slice(0, 4)}}</li>
        <li class="movie-age">{{getCertification}}</li>
        <li>{{Math.floor(movie.runtime / 60)}}h {{movie.runtime % 60}}m</li>
      </ul>
      <p class="movie-description">{{movie.overview}}</p>
      <ul class="movie-additional-info">
        <li ref="phoneTrailer" class="movie-trailer">
          Movie Trailer
          <iframe :src="`https://www.youtube.com/embed/${getTrailer}`" allowfullscreen/>
        </li>
        <li>Country<p>{{movie.production_countries[0].name}}</p></li>
      </ul>
    </div>
    <picture class="movie-poster">
      <source :srcset="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" media="(min-width: 1024px)">
      <source :srcset="`https://image.tmdb.org/t/p/original${movie.poster_path}`" media="(max-width: 1023px)">
      <NuxtImg class="movie-poster" preload :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="poster"/>
    </picture>
    <div @click="closeTrailer" class="movie-trailer larger" :class="{'active': isOpened}">
      <iframe :src="`https://www.youtube.com/embed/${getTrailer}`" allowfullscreen/>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { addToFavorites } from "~/services/favorites.js";

  const router = useRouter();

  const phoneTrailer = ref(null);
  const isOpened = ref(false);

  const inFavorites = ref(false);

  const { id } = useRoute().params;

  definePageMeta({
    layout: 'second',
  });
  useHead({
    title: 'Avatar: The Way of Water',
    meta: [
      { name: 'description', content: 'Avatar: The Way of Water' }
    ]
  });
  onMounted(() => {
    // Accept disabled scrolling from search
    document.body.style.overflow = '';
  })

  // Fetching movie detail
  const { data: movie } = await useFetch(`/api/movie/${id}`);

  if(!movie.value) {
    throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true});
  }

  // Favorite options
  const toggleFavorite = async () => {
    await addToFavorites(id);
  };

  // Getting certification for movie
  const getCertification = computed(() => {
    return movie.value.releases.countries.find(release => release.iso_3166_1 === 'US').certification;
  });
  // Getting trailer key for YouTube iframe
  const getTrailer = computed(() => {
    return movie.value.videos.results.findLast(video => video.type === 'Trailer').key;
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
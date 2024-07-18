<template>
  <div class="w-full bg-back-color-1">
    <header>
      <picture>
        <source :srcset="'/logo.png'" media="(min-width: 640px)">
        <source :srcset="'/favicon.png'" media="(max-width: 639px)">
        <NuxtImg preload class="logo" :src="'/favicon.png'" alt="Moviesta" />
      </picture>
      <nav>
        <ul>
          <li><NuxtLink to="/"><Icon name="solar:home-angle-broken"/> <p>Home</p></NuxtLink></li>
          <li><NuxtLink to="/favorites"><Icon name="solar:bookmark-linear"/> <p>Favorites</p></NuxtLink></li>
        </ul>
      </nav>
      <div class="search-window" :class="{'active': searchOpened}">
        <div class="search">
          <input ref="searchInput" v-model="searchQuery" @keyup="search" type="text" placeholder="Search Movie...." class="search-input"/>
          <Icon class="search-icon" @click="openSearchWindow" name="solar:magnifer-linear"/>
          <p class="close-btn" @click="closeSearchWindow">Cancel</p>
        </div>
        <ul class="result" @scroll="onStartScroll" :style="{ display: findMovies.length > 0 ? 'block' : 'none' }">
          <li v-for="(movie, index) in findMovies" :key="index">
            <SearchCard :movie="movie" />
          </li>
        </ul>
      </div>
    </header>
    <div class="w-full min-h-screen mt-20">
      <slot/>
    </div>
    <footer>
      <a href="https://github.com/azikkw/Moviesta" target="_blank">2024 <Icon name="mdi:github" size="25px"/> azikkw</a>
    </footer>
  </div>
</template>

<script setup>

  import { ref } from 'vue';

  const searchInput = ref(null);
  const searchQuery = ref('');
  const searchOpened = ref(false);
  const findMovies = ref([]);

  // Search movies function
  const search = async () => {
    if(searchQuery.value.length > 0) {
      const query = searchQuery.value.trim().toLowerCase();
      setTimeout(async () => {
        const { data: searchResult } = await useFetch(`/api/search/${query}`);
        findMovies.value = searchResult.value.results;
      }, 300)
    } else {
      findMovies.value = [];
    }
  }

  // Search window options
  const openSearchWindow = async () => {
    searchOpened.value = true;
    document.body.style.overflow = 'hidden'; // Preventing scroll

    // Focusing on input
    await nextTick();
    searchInput?.value.focus();
  }
  const closeSearchWindow = () => {
    // Clean query and array
    findMovies.value = [];
    searchQuery.value = '';

    // Disable search window value and overflow: hidden
    searchOpened.value = false;
    document.body.style.overflow = '';
  }
  // Disable input focus when scroll at phone
  const onStartScroll = async () => {
    await nextTick();
    searchInput?.value.blur()
  }

</script>

<style scoped>

</style>
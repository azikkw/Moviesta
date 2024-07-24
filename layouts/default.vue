<template>
  <div class="w-full bg-back-color-1">
    <header>
      <picture>
        <source :srcset="'/logo.png'" media="(min-width: 640px)">
        <source :srcset="'/favicon.png'" media="(max-width: 639px)">
        <NuxtImg loading="lazy" class="logo" :src="'/favicon.png'" alt="Moviesta" />
      </picture>
      <nav>
        <ul>
          <li><NuxtLink to="/"><Icon name="solar:home-angle-broken"/> <p>Home</p></NuxtLink></li>
          <li><NuxtLink to="/favorites"><Icon name="solar:bookmark-linear"/> <p>Favorites</p></NuxtLink></li>
          <li><NuxtLink to="/my-movies"><Icon name="solar:folder-open-linear"/> <p>My Movies</p></NuxtLink></li>
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
      <button class="logout" @click="logOut" aria-label="Logout btn"><Icon name="solar:logout-2-broken"/></button>
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

  const router = useRouter();

  onMounted(async () => {
    if(!localStorage.getItem('user')) {
      await router.replace('/login');
    }
  });

  // Log out from account
  const logOut = async () => {
    await logOutUser()
      .then(() => router.replace('/login'));
  }

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

  /* Header */
  header {
    @apply w-full h-20 fixed left-0 top-0 z-20 shadow-header flex items-center bg-back-color-2 px-[15px] sm:px-9 lg:px-16;
  }
  .logo {
    @apply w-auto h-[32px] sm:h-[23px] lg:h-[19px] mr-10 sm:mr-20;
  }
  /* Navigation */
  nav {
    @apply flex-1 flex items-center justify-start;
  }
  nav ul {
    @apply flex gap-5 lg:gap-6;
  }
  nav ul li a {
    @apply flex items-center gap-2 opacity-65 lg:opacity-80 lg:hover:opacity-100 transition-opacity duration-200;
  }
  nav ul li a p {
    @apply hidden xl:block md:text-lg lg:text-[16px];
  }
  nav ul li a span {
    @apply size-[26px] sm:size-7 lg:size-5 lg:mb-0.5;
  }
  /* Active route style */
  .router-link-exact-active {
    @apply font-medium opacity-100;
  }
  .router-link-exact-active span {
    @apply text-[#209CF9];
  }
  /* Search window */
  .search-window {
    @apply relative;
  }
  .search-window.active {
    @apply w-full h-screen overflow-hidden absolute left-0 top-0 z-50 bg-back-color-2 pt-6 sm:pt-8;
  }
  .search {
    @apply relative;
  }
  .search-window.active .search {
    @apply flex items-center gap-3 sm:gap-5 px-[15px] sm:px-16 md:px-[100px] mb-6 sm:mb-7;
  }
  .search-input {
    @apply hidden lg:block w-[370px] h-[36px] sm:h-11 lg:h-[36px] rounded-lg border border-[#424c61] bg-transparent px-[50px] text-[15px] sm:text-[16px] lg:text-[15px] focus:outline-none focus:border-[#209CF9];
  }
  .search-window.active .search-input {
    @apply w-full block px-[45px] sm:px-[50px];
  }
  .search-icon {
    @apply size-[26px] sm:size-7 lg:size-[17px] mt-1.5 lg:mt-0 lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:pointer-events-none;
  }
  .search-window.active .search-icon {
    @apply size-[18px] sm:size-5 absolute left-[33px] sm:left-[85px] md:left-[120px] top-1/2 -translate-y-1/2 mt-0;
  }
  .close-btn {
    @apply hidden text-[18px] sm:text-[19px];
  }
  .search-window.active .close-btn {
    @apply block;
  }
  .search-input:focus + span {
    @apply text-[#209CF9];
  }
  /* Search result */
  .result {
    @apply w-full h-[calc(100%-60px)] lg:h-auto lg:max-h-[380px] overflow-y-auto lg:absolute lg:left-0 lg:top-[44px] bg-back-color-2 rounded-lg border border-[#424c61] lg:p-[15px];
  }
  .search-window.active .result {
    @apply block border-none px-[15px] sm:px-16 md:px-[100px] lg:px-[15px];
  }
  /* Log out btn */
  .logout {
    @apply flex items-center ml-7 sm:ml-8;
  }
  .logout span {
    @apply size-[26px] sm:size-7 lg:size-[21px] opacity-80 lg:opacity-100;
  }
  .logout:hover span {
    @apply text-[#209CF9];
  }
  /* Footer */
  footer {
    @apply bg-back-color-1 flex justify-center py-6 border-t border-[#1a1f2b];
  }
  footer a {
    @apply flex items-center opacity-70 lg:hover:opacity-100 text-[16px] lg:text-[15px] gap-2;
  }

</style>
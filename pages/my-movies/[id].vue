<template>
  <div v-if="movie" class="movie-page">
    <Head>
      <Title>{{movie.title}} | Moviesta</Title>
      <Meta name="description" :content="movie.overview" />
    </Head>
    <BackButton/>
    <div class="movie-top">
      <Rating :rating="movie.rating" />
      <p class="movie-title">{{movie.title}}</p>
      <div class="movie-actions">
        <button @click="openEditWindow" class="trailer-btn" aria-label="Edit movie btn">Edit Movie</button>
        <button @click="removeMovie" class="add-favorite-btn" aria-label="Remove movie btn"><Icon name="solar:trash-bin-trash-bold"/></button>
      </div>
      <div class="poster-shadow"></div>
    </div>
    <div class="movie-bottom">
      <ul class="movie-info">
        <li class="font-medium">{{movie.release_date.slice(0, 4)}}</li>
      </ul>
      <p class="movie-description">{{movie.overview}}</p>
    </div>
    <NuxtImg class="movie-poster h-[75%] object-cover" loading="lazy" :src="`${movie.poster_path}`" alt="poster"/>
    <div v-if="isOpened" class="edit-window">
      <form @submit.prevent="submitUpdatedMovie" class="edit-movie-form">
        <p class="text-xl sm:text-2xl lg:text-xl font-medium mb-4">Edit movie</p>
        <Icon @click="closeEditWindow" name="solar:close-circle-broken" class="absolute right-5 sm:right-10 top-6 sm:top-10 size-[38px] sm:size-[50px] lg:size-[40px] cursor-pointer text-[#209CF9]" />
        <input class="form-input" v-model="formData.poster_path" type="url" placeholder="Poster path (https:\\...)" required />
        <input class="form-input" v-model="formData.title" type="text" placeholder="Movie title...." required />
        <textarea class="form-textarea" v-model="formData.overview" placeholder="Movie description...." required />
        <input class="form-input" v-model="formData.rating" type="number" step="0.1" placeholder="Movie rating...." required />
        <input class="form-input" v-model="formData.release_date" type="text" placeholder="Movie release year...." required />
        <button class="form-btn" type="submit" aria-label="Submit btn">Edit</button>
      </form>
    </div>
  </div>
</template>

<script setup>

  import { ref } from "vue";

  definePageMeta({
    layout: 'second'
  });

  const { id } = useRoute().params;
  const movie = ref(null);

  const formData = ref({
    poster_path: '',
    title: '',
    overview: '',
    rating: 0,
    release_date: '',
  });
  const isOpened = ref(false);

  const router = useRouter();

  onMounted(async () => {
    movie.value = await getMyMovie(id);
  });

  const removeMovie = () => {
    try {
      removeFromMyMovies(id).then(() => router.replace('/my-movies'));
    } catch(error) {
      console.log(error);
    }
  }

  // Deep copy function
  const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

  // Edit movie window options
  const openEditWindow = () => {
    isOpened.value = true;
    formData.value = deepCopy(movie?.value);
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  }
  const closeEditWindow = () => {
    isOpened.value = false;
    document.body.style.overflow = '';
    formData.value = {
      poster_path: '',
      title: '',
      overview: '',
      rating: 0,
      release_date: '',
    }
  }

  // Update movie function
  const submitUpdatedMovie = async () => {
    try {
      await updateMovie(id, formData.value)
        .then(() => movie.value = deepCopy(formData.value));
      closeEditWindow();
    } catch(error) {
      console.log(error);
    }
  }

</script>

<style scoped>

</style>
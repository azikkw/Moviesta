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
      <div class="edit">
        <Icon @click="closeEditWindow" name="solar:close-circle-broken" class="absolute right-5 sm:right-10 top-6 sm:top-10 size-[38px] sm:size-[50px] lg:size-[40px] cursor-pointer text-[#209CF9]" />
        <div class="w-full">
          <p class="text-xl sm:text-2xl lg:text-xl font-medium mb-4">Edit movie</p>
          <div class="upload-img">
            <input type="file" id="movie-img" @change="onFileChange" />
            <img v-if="imageURL" :src="imageURL" alt="Uploaded Image" />
            <label for="movie-img"></label>
            <p>Choose Image</p>
          </div>
        </div>
        <form @submit.prevent="submitUpdatedMovie" class="edit-movie-form">
          <input class="form-input" v-model="formData.title" type="text" placeholder="Movie title...." required />
          <textarea class="form-textarea" v-model="formData.overview" placeholder="Movie description...." required />
          <input class="form-input" v-model="formData.rating" type="number" step="0.1" min="0" max="10"  placeholder="Movie rating...." required />
          <input class="form-input" v-model="formData.release_date" type="text" placeholder="Movie release year...." required />
          <p v-if="uploadStatus.length > 0" class="text-[15px] sm:text-[16px] lg:text-[14.5px] font-medium">{{ uploadStatus }}</p>
          <button class="form-btn" type="submit" aria-label="Submit btn">Edit</button>
        </form>
      </div>
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

  const file = ref(null);
  const imageURL = ref('');
  const uploadStatus = ref('');

  // When image chosen, show it to user
  const onFileChange = (e) => {
    file.value = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file.value);
    reader.onload = () => {
      imageURL.value = reader.result;
    };
  };

  const router = useRouter();

  onMounted(async () => {
    movie.value = await getMyMovie(id);
  });

  const removeMovie = () => {
    try {
      removeFromMyMovies(id)
        .then(() => router.replace('/my-movies'));
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
    imageURL.value = movie?.value.poster_path;
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
  }
  const closeEditWindow = () => {
    isOpened.value = false;
    document.body.style.overflow = '';
    // Clearing all the data
    formData.value = {
      poster_path: '',
      title: '',
      overview: '',
      rating: 0,
      release_date: '',
    }
    imageURL.value = '';
  }

  // Update movie function
  const submitUpdatedMovie = async () => {
    try {
      uploadStatus.value = 'Updating your movie....';
      await updateMovie(id, formData.value, file.value)
        .then(() => movie.value = deepCopy(formData.value));
      uploadStatus.value = '';
      closeEditWindow();
    } catch(error) {
      console.log(error.code);
    }
  }

</script>

<style scoped>

  /* Edit movie */
  .edit-window {
    @apply w-full h-screen fixed left-0 top-0 z-10 bg-[#090E17B2] flex justify-center items-center;
  }
  .edit {
    @apply w-full lg:w-fit h-screen overflow-y-auto lg:h-fit flex flex-col lg:flex-row items-center bg-back-color-1 px-5 py-20 lg:py-14 lg:px-16 lg:rounded-xl lg:gap-8;
  }
  .edit .upload-img {
    @apply w-full lg:w-[360px];
  }
  .edit-movie-form {
    @apply bg-back-color-1 w-full lg:w-fit flex flex-col justify-center items-center;
  }

</style>
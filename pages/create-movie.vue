<template>
  <div class="w-full bg-back-color-2 flex justify-center py-[100px] sm:py-0 lg:py-[95px]">
    <BackButton/>
    <form @submit.prevent="submitMovie" class="create-movie-form">
      <p class="text-xl sm:text-2xl lg:text-xl font-medium mb-4">Create movie</p>
      <div class="upload-img">
        <input type="file" id="movie-img" @change="onFileChange" />
        <img v-if="imageURL" :src="imageURL" alt="Uploaded Image" />
        <label for="movie-img"></label>
        <p>Choose Image</p>
      </div>
      <p v-if="errorMessage.length > 0" class="error-message mb-4">{{errorMessage}}</p>
      <input class="form-input" v-model="formData.title" type="text" placeholder="Movie title...." required />
      <textarea class="form-textarea" v-model="formData.overview" placeholder="Movie description...." required />
      <input class="form-input" v-model="formData.rating" type="number" step="0.1" min="0" max="10" placeholder="Movie rating...." required />
      <input class="form-input" v-model="formData.release_date" type="text" placeholder="Movie release year...." required />
      <p v-if="uploadStatus.length > 0" class="text-[15px] sm:text-[16px] lg:text-[14.5px] font-medium">{{ uploadStatus }}</p>
      <button class="form-btn" type="submit" aria-label="Submit btn">Create</button>
    </form>
  </div>
</template>

<script setup>

  definePageMeta({
    layout: 'second'
  });
  useHead({
    title: 'Create movie | Moviesta',
  });

  const router = useRouter();

  const file = ref(null);
  const imageURL = ref('');
  const errorMessage = ref('');
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

  const formData = ref({
    poster_path: '',
    title: '',
    overview: '',
    rating: 0,
    release_date: '',
  });

  const submitMovie = async () => {
    try {
      if(!file.value) {
        errorMessage.value = defineError('not image');
      } else {
        uploadStatus.value = 'Uploading your movie....';
        await createMovie({
          id: Math.random().toString(36).substr(2, 10),
          ...formData.value
        }, file.value)
        .then(() => router.replace('/my-movies'));
      }
    } catch(error) {
      console.log(error.code);
    }
  }

</script>

<style scoped>

</style>
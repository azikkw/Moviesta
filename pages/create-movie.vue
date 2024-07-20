<template>
  <div class="w-full flex justify-center">
    <BackButton/>
    <form @submit.prevent="submitMovie" class="create-movie-form">
      <p class="text-xl sm:text-2xl lg:text-xl font-medium mb-4">Create movie</p>
      <input class="form-input" v-model="formData.poster_path" type="url" placeholder="Poster path (https:\\...)" required />
      <input class="form-input" v-model="formData.title" type="text" placeholder="Movie title...." required />
      <textarea class="form-textarea" v-model="formData.overview" placeholder="Movie description...." required />
      <input class="form-input" v-model="formData.rating" type="number" step="0.1" placeholder="Movie rating...." required />
      <input class="form-input" v-model="formData.release_date" type="text" placeholder="Movie release year...." required />
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

  const formData = ref({
    poster_path: '',
    title: '',
    overview: '',
    rating: 0,
    release_date: '',
  });

  const submitMovie = async () => {
    console.log(formData.value);
    await createMovie({
      id: Math.random().toString(36).substr(2, 10),
      ...formData.value}
    ).then(() => router.replace('/my-movies'));
  }

</script>

<style scoped>

</style>
<template>
  <div class="auth-back">
    <div class="auth">
      <p class="auth-title">Log In to</p>
      <NuxtImg class="welcome" preload src="/logo.png"/>
      <form @submit.prevent="logIn" class="auth-form">
        <input class="form-input" v-model="email" type="email" placeholder="Enter email...." required />
        <input class="form-input" v-model="password" type="password" placeholder="Enter password...." required />
        <ErrorMessage :errorMessage="errorMessage"/>
        <button class="form-btn" type="submit" aria-label="Submit btn">Log In</button>
      </form>
      <NuxtLink class="link-to" to="/sign-up">Don't have an account? <p class="text-[#209CF9] font-medium">Sign Up</p></NuxtLink>
    </div>
    <div class="for-shadow"></div>
  </div>
</template>

<script setup>

  const router = useRouter();

  const email = ref('');
  const password = ref('');

  const errorMessage = ref('');

  definePageMeta({
    layout: 'auth'
  });
  onMounted(async () => {
    if(localStorage.getItem('user')) {
      await router.replace('/');
    }
  });

  const logIn = async () => {
    try {
      await logInUser(email.value, password.value)
        .then(() => router.replace('/'));
    } catch(error) {
      errorMessage.value = defineError(error.code)
    }
  };

</script>

<style scoped>

</style>
<template>
  <div class="auth-back">
    <div class="auth">
      <p class="auth-title">Sign Up to</p>
      <NuxtImg class="welcome" preload src="/logo.png"/>
      <form @submit.prevent="signUp" class="auth-form">
        <input class="form-input" v-model="email" type="email" placeholder="Enter email...." required />
        <input class="form-input" v-model="password" type="password" placeholder="Enter password...." required />
        <ErrorMessage :errorMessage="errorMessage"/>
        <button class="form-btn" type="submit" aria-label="Submit btn">Sign Up</button>
      </form>
      <NuxtLink class="link-to" to="/login">Already have an account? <p class="text-[#209CF9] font-medium">Log In</p></NuxtLink>
    </div>
    <div class="for-shadow"></div>
  </div>
</template>

<script setup>

  const email = ref('');
  const password = ref('');

  const errorMessage = ref('');

  const router = useRouter();

  definePageMeta({
    layout: 'second',
  });
  onMounted(async () => {
    if(localStorage.getItem('user')) {
      await router.replace('/');
    }
  });

  const signUp = async () => {
    try {
      await createUser(email.value, password.value)
        .then(() => router.replace('/login'));
    } catch(error) {
      errorMessage.value = defineError(error.code)
    }
  }

</script>

<style scoped>

</style>
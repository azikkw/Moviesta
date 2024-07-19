<template>
  <div class="auth-back">
    <div class="auth">
      <p class="auth-title">Log In to</p>
      <NuxtImg class="welcome" preload src="/logo.png"/>
      <form @submit.prevent="logIn" class="auth-form">
        <input v-model="email" type="email" placeholder="Enter email...." required />
        <input v-model="password" type="password" placeholder="Enter password...." required />
        <p v-if="errorMessage.length > 0" class="error-message">{{errorMessage}}</p>
        <button type="submit">Log In</button>
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

  const firebaseUser = useFirebaseUser();

  definePageMeta({
    // middleware: 'already-logged-in',
    layout: 'second'
  });

  const logIn = async () => {
    await logInUser(email.value, password.value);
      // .then(() => router.replace('/'));
  };

</script>

<style scoped>

</style>
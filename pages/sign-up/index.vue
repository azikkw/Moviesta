<template>
  <div class="auth-back">
    <div class="auth">
      <p class="auth-title">Sign Up to</p>
      <NuxtImg class="welcome" preload src="/logo.png"/>
      <form @submit.prevent="signUp" class="auth-form">
        <input v-model="email" type="email" placeholder="Enter email...." required />
        <input v-model="password" type="password" placeholder="Enter password...." required />
        <p v-if="errorMessage.length > 0" class="error-message">{{errorMessage}}</p>
        <button type="submit">Sign Up</button>
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

  const signUp = async () => {
    await createUser(email.value, password.value)
        .then(() => router.replace('/login'));
  }

</script>

<style scoped>

</style>
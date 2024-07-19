<template>
  <div class="auth-back">
    <div class="auth">
      <p class="auth-title">Log In to</p>
      <NuxtImg class="welcome" preload src="/logo.png"/>
      <form @submit.prevent="signIn" class="auth-form">
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

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useNuxtApp } from '#app';

  import { signInWithEmailAndPassword } from "firebase/auth";
  import {checkErrorType} from "~/services/authError.js";

  const { $auth } = useNuxtApp();
  const router = useRouter();

  const email = ref('');
  const password = ref('');

  const errorMessage = ref('');

  definePageMeta({
    layout: 'second'
  });

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword($auth, email.value, password.value)
        .then(() => router.push('/'));
    } catch(error) {
      checkError(error.code);
    }
  };

  // If error occurred, check it type and display
  const checkError = (error) => {
    errorMessage.value = checkErrorType(error);
  }

</script>

<style scoped>

</style>
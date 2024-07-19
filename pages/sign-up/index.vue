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
      <NuxtLink class="link-to" to="/">Already have an account? <p class="text-[#209CF9] font-medium">Log In</p></NuxtLink>
    </div>
    <div class="for-shadow"></div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useNuxtApp } from '#app';

  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { doc, setDoc } from "firebase/firestore";
  import { checkErrorType } from "~/services/authError.js";

  const router = useRouter();
  const { $auth, $firestore } = useNuxtApp();

  const email = ref('');
  const password = ref('');

  const errorMessage = ref('');

  definePageMeta({
    layout: 'second'
  });

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword($auth, email.value, password.value)
        .then((cred) => addUserToDb(cred.user.uid))
    } catch(error) {
      checkError(error.code);
    }
  };

  // Adding user to DB after sign up
  const addUserToDb = (uid) => {
    setDoc(doc($firestore, "users", uid), {
      favorites: []
    })
    .then(() => router.push('/')); // Routing to login page
  }

  // If error occurred, check it type and display
  const checkError = (error) => {
    errorMessage.value = checkErrorType(error);
  }

</script>

<style scoped>

</style>
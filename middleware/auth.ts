import { onAuthStateChanged } from "@firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {

    const { $auth } = useNuxtApp();

    // Redirect to Home page
    if(!$auth.currentUser?.uid) {
        return navigateTo('/login')
    }

    // onAuthStateChanged($auth, user => {
    //     if(!user) {
    //         return navigateTo('/login')
    //     }
    // });

});
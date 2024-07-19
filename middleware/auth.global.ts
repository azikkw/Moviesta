import { useNuxtApp } from '#app';
import { onAuthStateChanged } from "@firebase/auth";

export default defineNuxtRouteMiddleware((to, from) => {

    const { $auth } = useNuxtApp();

    onAuthStateChanged($auth, user => {
        if(user && (to.path === '/login' || to.path === '/sign-up')) {
            return navigateTo('/');
        }
        if(!user && to.path !== '/login') {
            return navigateTo('/login');
        }
    });

});
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";

// User Registration function
export const createUser = async (email: string, password: string) => {
    const { $auth } = useNuxtApp();
    return createUserWithEmailAndPassword($auth, email, password)
        .then((cred) => addUserToDb(cred.user.uid));
}
const addUserToDb = (uid: string) => {
    const { $db } = useNuxtApp();
    setDoc(doc($db, "users", uid), {
        id: uid
    });
}
// User Log in function
export const logInUser = async (email: string, password: string) => {
    const { $auth } = useNuxtApp();
    return await signInWithEmailAndPassword($auth, email, password)
        .then((cred) => localStorage.setItem('moviesta-user', cred.user.uid));
}
// User Log out function
export const logOutUser = async () => {
    const { $auth } = useNuxtApp();
    return await $auth.signOut()
        .then(() => localStorage.removeItem('moviesta-user'));
}
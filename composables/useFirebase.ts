import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const credentials = createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials
}

export const logInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const credentials = signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return credentials
}

export const logOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    return result;
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        firebaseUser.value = user;
    });
}
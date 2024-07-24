import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "@firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import useFirebaseUser from "~/utils/useFirebaseUser";
import type { RouteParamValue } from "#vue-router";

// Add movie to favorites list
export const addToFavorite = async (movie: any) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const userFavoritesRef = doc($db, `users/${user}/favorites`, movie.id);
        await setDoc(userFavoritesRef, movie);
    }
}
// Remove movie to favorites list
export const removeFromFavorite = async (movie: any) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const userFavoritesRef = doc($db, `users/${user}/favorites`, movie.id);
        await deleteDoc(userFavoritesRef);
    }
}
// Check movie for favorites list
export const checkForFavorite = async (id: string) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const userFavorites = await getDoc(doc($db, `users/${user}/favorites`, id));
        return userFavorites.exists();
    }
    return false;
}
// Get favorites list
export const getFavorites = async () => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const querySnapshot = await getDocs(collection($db, `users/${user}/favorites`));
        const userFavorites = querySnapshot.docs.map(doc => doc.data());
        return userFavorites;
    }
}

// Create movie function
export const createMovie = async (movie: any, file: File) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        if(file) {
            movie.poster_path = await uploadFileAndGetURL(file);
            const userCreatedMoviesRef = doc($db, `users/${user}/movies`, movie.id);
            await setDoc(userCreatedMoviesRef, movie);
        }
    }
}
// Get my movies function
export const getMyMovies = async () => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const querySnapshot = await getDocs(collection($db, `users/${user}/movies`));
        const userMovies = querySnapshot.docs.map(doc => doc.data());
        return userMovies;
    }
}
// Get particular movie by it id
export const getMyMovie = async (id: string | RouteParamValue[]) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const myMovie = await getDoc(doc($db, `users/${user}/movies`, id));
        if(myMovie.exists()) {
            return myMovie.data();
        }
    }
    return null;
}
// Remove movie from my movies list
export const removeFromMyMovies = async (id: string | RouteParamValue[]) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        // @ts-ignore
        const userMovieRef = doc($db, `users/${user}/movies`, id);
        await deleteDoc(userMovieRef);
    }
}
// Update movie function
export const updateMovie = async (id: any, updatedData: any, file: File) => {
    const { $db } = useNuxtApp();
    const user = useFirebaseUser();

    if(user) {
        if(file) {
            const deleted = await deleteImageFromStorage(updatedData.poster_path);
            if(deleted) {
                updatedData.poster_path = await uploadFileAndGetURL(file);
                const movieDocRef = doc($db, `users/${user}/movies`, id);
                await updateDoc(movieDocRef, updatedData);
            }
        }
        else {
            console.log('file not updated')
            const movieDocRef = doc($db, `users/${user}/movies`, id);
            await updateDoc(movieDocRef, updatedData);
        }
    }
};
// Adding image to storage
const uploadFileAndGetURL = async (file: File) => {
    const { $storage } = useNuxtApp();
    const storageReference = ref($storage, `images/${file.name}`);
    await uploadBytes(storageReference, file);
    return await getDownloadURL(storageReference);
};
// Delete image from storage
const deleteImageFromStorage = async (imagePath: string) => {
    const { $storage } = useNuxtApp();
    const storageReference = ref($storage, imagePath);
    try {
        await deleteObject(storageReference);
        return true;
    } catch(error) {
        console.error('Error deleting image:', error);
        return false;
    }
};
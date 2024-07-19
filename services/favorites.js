import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const { $auth, $firestore } = useNuxtApp();

// Function to add movie to favorites
export const addToFavorites = async (movieId) => {
    const user = $auth.currentUser;

    if(user) {
        const uid = user.uid;
        const userFavoritesRef = doc($firestore, "users", uid);

        try {
            await updateDoc(userFavoritesRef, {
                favorites: arrayUnion(movieId) // 'favorites' is an array field containing movie IDs
            });
        } catch(error) {
            console.error('Error adding movie to favorites:', error);
        }
    } else {
        console.log('User is not signed in');
    }
}
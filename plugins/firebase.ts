import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {

    // Web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAiYCHSu-6nMlfQ7dTzGeBC8j6mcjOOiIg",
        authDomain: "moviesta-eb60d.firebaseapp.com",
        projectId: "moviesta-eb60d",
        storageBucket: "moviesta-eb60d.appspot.com",
        messagingSenderId: "463785795483",
        appId: "1:463785795483:web:5a331f452d13abe1394b3e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    return {
        provide: {
            auth,
            db,
            storage
        }
    }

});
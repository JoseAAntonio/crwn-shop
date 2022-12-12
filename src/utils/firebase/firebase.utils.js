import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBOTtqdPvjS6mFomUSw59FEISBQdR9EhW0",
	authDomain: "crwn-shop-db-ea315.firebaseapp.com",
	projectId: "crwn-shop-db-ea315",
	storageBucket: "crwn-shop-db-ea315.appspot.com",
	messagingSenderId: "262412525073",
	appId: "1:262412525073:web:03febb044f363c24415bb0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

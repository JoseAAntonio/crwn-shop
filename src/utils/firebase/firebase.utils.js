import { initializeApp } from "firebase/app";
//NOTE - here we usin the Google authenticator provider...theres more like facebook,github etc
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const Googleprovider = new GoogleAuthProvider();

Googleprovider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, Googleprovider);

//NOTE - points to our database inside the firestore console
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
	//NOTE - give me the document REFERENCE (doc) inside this db,under the 'users' collection with this uid - it creates a object reference that still doenst exist in the db
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	//NOTE - allow us to check if a instance of that user existis in the db and also allows us to access the data (getDoc)
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error creating the use", error.message);
		}
	}

	return userDocRef;
};

//NOTE
//if user data does not exists
//create/set the document with the data from userAuth in my collection

//if user data exists
//return userDocRef

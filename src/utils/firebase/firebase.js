import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDcnV-Ai-iMXLraeExdiEIcWGUJVsf39qM",
	authDomain: "crwn-clothing-db-64bc9.firebaseapp.com",
	projectId: "crwn-clothing-db-64bc9",
	storageBucket: "crwn-clothing-db-64bc9.appspot.com",
	messagingSenderId: "652162358007",
	appId: "1:652162358007:web:9548e8e433741cfb3291f2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());
};

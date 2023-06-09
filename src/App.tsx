import { createContext, useEffect, useState } from "react";
import "./App.scss";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./utils/routes";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDY7ZuvGug1TUvYQ9fReLsa-_265IjpGiE",
	authDomain: "vimnotes-fd.firebaseapp.com",
	projectId: "vimnotes-fd",
	storageBucket: "vimnotes-fd.appspot.com",
	messagingSenderId: "81028799193",
	appId: "1:81028799193:web:a47acaf6392220eb177cc8",
	measurementId: "G-NT5BXWDFTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)
const db = getFirestore(app);
const auth = getAuth(app);

interface IFirebaseContextProp {
	auth: Auth;
	db: Firestore;
}

export const FirebaseContext = createContext(
	null as unknown as IFirebaseContextProp
);

function App() {
	const [init, setInit] = useState(false);

	// error cant render Root before the app initializes using HMR
	// will remove this after deployment
	useEffect(() => {
		setInit(true);
	}, []);

	return (
		<div className="App">
			<FirebaseContext.Provider value={{ db, auth }}>
				{init && <RouterProvider router={ROUTES} />}
			</FirebaseContext.Provider>
		</div>
	);
}

export default App;

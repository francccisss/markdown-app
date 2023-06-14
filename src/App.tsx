import { createContext, useEffect, useState } from "react";
import "./App.scss";
// Import the functions you need from the SDKs you need
import { RouterProvider, useNavigate } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import { FirebaseContext, auth, db } from "./utils/contexts/firebaseContext";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

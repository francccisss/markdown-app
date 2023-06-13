import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface IFirebaseContextProp {
	auth: Auth;
	db: Firestore;
}

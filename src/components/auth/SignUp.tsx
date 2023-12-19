import AuthForm from "@/components/auth/AuthForm";
import { useState, useContext } from "react";
import { FirebaseContext } from "@/utils/contexts/firebaseContext";
import {
  User,
  createUserWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { IFormEntries } from "@/utils/types/FormEntries";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState<string>("");
  const { db, auth } = useContext(FirebaseContext);
  const [isSigninUp, setIsSigningUp] = useState(false);
  const location = useLocation();

  async function setUserInDatabase(user: User | null) {
    if (user === null) {
      setError("Error");
      throw "Unable to add user to database";
    } else {
      try {
        const usersRef = doc(db, "users", user.uid);
        const setUser = await setDoc(usersRef, {
          email: user === null ? "" : user.email,
          dateAdded: new Date(),
        });
        console.log("Store user in firestore");
      } catch (err) {
        setError("Something went wrong please comeback another time");
        throw err;
      }
    }
  }
  async function signUpUser(e: React.InvalidEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(
      form.entries()
    ) as unknown as IFormEntries;
    if (showError(e, formEntries)) {
      setIsSigningUp(true);
      try {
        const createUser = await createUserWithEmailAndPassword(
          auth,
          formEntries.email.toString(),
          formEntries.password.toString()
        );
        console.log(createUser.user);
        setUserInDatabase(auth.currentUser);
        setIsSigningUp(false);
      } catch (err) {
        setIsSigningUp(false);
        const deleteCurrentUser =
          auth.currentUser !== null && deleteUser(auth.currentUser);
        setError("* Invalid email / already existing email");
        console.log(err);
      }
    }
  }

  function showError(
    e: React.InvalidEvent<HTMLFormElement>,
    { password, passConf }: IFormEntries
  ): boolean {
    const formElement = e.target;

    if (password.toString() !== passConf.toString()) {
      // custom validation constraint
      setError("*Password doesn't match");
      return false;
    } else if (!formElement.checkValidity()) {
      setError("*Please check your email and password");
    }
    return formElement.reportValidity();
  }

  return (
    <>
      <AuthForm
        processingAuth={isSigninUp}
        setError={setError}
        handleSubmit={signUpUser}
        error={error}
        action={location.pathname}
      />
    </>
  );
};

export default SignUp;

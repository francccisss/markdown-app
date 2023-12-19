import AuthContents from "@/components/AuthContents";
import { FirebaseContext } from "@/utils/contexts/firebaseContext";
import { User, deleteUser, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/rootAuth.scss";
import SignIn from "@/components/auth/SignIn";

const RootAuth = () => {
  const navigate = useNavigate();
  const { auth, db } = useContext(FirebaseContext);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    setIsSignedIn(true);
    onAuthStateChanged(auth, async (user) => {
      if (user && (await checkIfUserExists(user))) {
        setIsSignedIn(false);
        navigate("/app");
      } else {
        setIsSignedIn(false);
        navigate("/");
      }
    });
  }, []);

  async function checkIfUserExists(user: User): Promise<boolean> {
    try {
      const useRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(useRef);
      return userDoc.exists() ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return (
    <main id="auth" className="page flex bg-[#ffffff] h-screen min-w-fit">
      <section
        id="left-auth-contents"
        className="flex-1 flex w-full bg-vn-black p-8"
      >
        <AuthContents />
      </section>
      <section
        id="auth-form-section"
        className="z-10 max-lg:w-[50%]  lg:w-5/12 2xl:w-4/12 bg-vn-black flex items-center justify-center "
      >
        {!isSignedIn ? (
          <>{window.location.pathname === "/" ? <SignIn /> : <Outlet />}</>
        ) : (
          <span id="loading-spinner" className="loading-spinner" />
        )}
      </section>
    </main>
  );
};

export default RootAuth;

import React, { useEffect } from "react";
import { UserAuth } from "./api/context/AuthContext";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import {
  doc,
  setDoc,
  serverTimestamp,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "./api/firebase";

const Home = () => {
  const { googleSignIn, user } = UserAuth();

  const router = useRouter();

  const handleGoogleSignin = async () => {
    try {
      const res = await googleSignIn();

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.displayName) {
      const addUser = async () => {
        const res2 = await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          image: user.photoURL,
          token: user.accessToken,
          timeStamp: serverTimestamp(),
        });
        console.log(user.displayName);
      };

      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      if (!q) addUser();
      router.replace("LandingPage");
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-4">Welcome to pokemon API</h1>
        <h1 className="text-xl">Please sign In before continuing</h1>
        <div className="mt-20">
          <GoogleButton onClick={handleGoogleSignin}></GoogleButton>
        </div>
      </div>
    </>
  );
};

export default Home;

import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  const router = useRouter();

  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row justify-between bg-slate-700 text-gray-300 p-4">
      <div>
        <h2 className="font-bold text-2xl">PokemonAPI</h2>
      </div>
      <div>
        {user?.displayName ? (
          <button
            onClick={signOutHandler}
            className="text-black p-3 bg-red-300 hover:bg-red-400 rounded-md duration-200"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={handleGoogleSignin}
            className="text-black p-3 bg-green-200 hover:bg-green-300 rounded-md duration-200"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

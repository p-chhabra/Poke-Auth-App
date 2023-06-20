import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { UserAuth } from "./api/context/AuthContext";
import { useRouter } from "next/router";
import Protected from "./api/components/Protected";
import { db } from "./api/firebase";
import { doc, updateDoc } from "firebase/firestore";

const LandingPage = ({ pokemons }) => {
  const { logOut, user } = UserAuth();
  const router = useRouter();

  const signOutHandler = async () => {
    try {
      await logOut();
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const saveDataHandler = async () => {
    try {
      const response = await updateDoc(doc(db, "users", user.uid), {
        pokemons: pokemons.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  let id = 1;
  return (
    <Protected>
      {
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl">Welcome {user?.displayName}</div>
          <div className="mt-12 mb-12">
            <h1 className="text-2xl mb-10">Your List of Pokemons</h1>
            <div className="flex flex-col items-center">
              {pokemons.results.map((pokemon) => {
                return <div key={id++}>{pokemon.name}</div>;
              })}
            </div>
          </div>
          <div className="mt-10 flex flex-row justify-center space-x-10">
            <button
              onClick={saveDataHandler}
              className="p-3 border-black-300 text-2xl bg-green-200 hover:bg-green-300 duration-200"
            >
              Save Data
            </button>

            <button
              onClick={signOutHandler}
              className="p-3 border-black-300 text-2xl bg-red-300 hover:bg-red-400 duration-200"
            >
              Log Out
            </button>
          </div>
        </div>
      }
    </Protected>
  );
};

export default LandingPage;

export async function getStaticProps() {
  let pokemons = {};
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    if (data) {
      pokemons = data;
    }
    console.log(pokemons);
  } catch (err) {
    console.log(err);
  }
  return {
    props: { pokemons },
  };
}

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });

    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
    setIsPending(false);
    setError(false);
  };

  return { error, signup, isPending };
};

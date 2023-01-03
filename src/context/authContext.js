import React, { useState, createContext, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      collection: [],
      liked: []
    });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    await signOut(auth);
    //TODO: I'll using modal here to show a message
  };

  const addToUserCollection = async chart => {
    await updateDoc(doc(db, "users", user), {
      collection: arrayUnion({
        id: chart.id,
        title: chart.title,
        img: chart.cover,
        artist: chart.artist
      })
    });
  };

  // Définir un observateur d'état d'authentification
  // et obtenir des données utilisateur avec la méthode
  //onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, cred => {
      setUser(cred?.email);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <authContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        addToUserCollection
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

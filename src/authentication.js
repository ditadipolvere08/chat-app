import { getRedirectResult, signInWithRedirect, signOut } from "firebase/auth";
import { auth, firestore } from "./firebase_config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";

export const logout = () => {
  signOut(auth);
};

export const login_google = async () => {
  const provider = new GoogleAuthProvider();
  const user = await (await signInWithRedirect(auth, provider)).user;
  const isFirstLogin =
    user.metadata.lastSignInTime === user.metadata.creationTime;
  if (isFirstLogin) {
    setDoc(doc(firestore, "users", user.uid), {
      imgUrl: user.photoURL,
      username: user.displayName,
    });
  }
};

import { signOut } from "firebase/auth";
import { auth } from "./firebase_config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

export const logout = () => {
  signOut(auth);
};

export const login_github = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider);
};

export const login_google = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

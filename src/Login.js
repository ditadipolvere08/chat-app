import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase_config";
import "./style/firebase-ui-auth.css";
import "./style/Login.css";


const firebaseui = require("firebaseui");

export default function Login() {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [GoogleAuthProvider.PROVIDER_ID],
    });
  }, []);

  return (
    <div className="Login">
      <h1>Login</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

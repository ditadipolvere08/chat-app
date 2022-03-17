import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase_config";
import Login from "./Login";
import Chat from "./Chat";
import Navbar from "./Navbar"
import "./style/App.css"

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // Se l'utente non ha effettuato il login user === null
  if (user === undefined) return <h1>Initializing...</h1>;

  console.log(user?.uid)

  return (
    <div className="App">
      {user === null ? (
        <Login />
      ) : (
        <div>
          <Navbar />
          <Chat />
        </div>
      )}
    </div>
  );
}

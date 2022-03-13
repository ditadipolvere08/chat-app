import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase_config.js";
import Login from "./Login";
import Dashboard from "./Dashboard.js";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return <div className="App">{user === null ? <Login /> : <Dashboard />}</div>;
}

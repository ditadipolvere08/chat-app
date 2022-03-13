import { signOut } from "firebase/auth";
import { auth } from "./firebase_config";
import "./style/Navbar.css";

export default function Navbar() {
  const user = auth.currentUser
  return (
    <div className="Navbar">
      <h1>{user?.displayName}</h1>
      <button className="logout"
        onClick={async () => {
          signOut(auth);
        }}
      >
        Logout 
      </button>
    </div>
  );
}

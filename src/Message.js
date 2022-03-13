import { auth } from "./firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./Message.css";

export default function Message(params) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  if (user === null) {
    return <h1>Initializing...</h1>;
  };
  return (
    <div
      className={params.sender_uid === user.uid ? "msg sended" : "msg received"}
    >
      <img
        referrerPolicy="no-referrer"
        className="msgPhoto"
        src={params.photoUrl}
        alt={"Profile_image"}
      />
      <div className="text">
        <p className="senderName">{params.sender_name}</p>
      <p className="msgText">{params.text}</p>
      </div>
    </div>
  );
}

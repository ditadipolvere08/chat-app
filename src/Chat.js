import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "./firebase_config";
import Message from "./Message";

export default function Chat() {
  const messages = ["ciao come va?", "bene, grazie", "ciao ciao"];
  return (
    <div className="chat">
      {messages.map((message, index) => (
        <Message key={index} msg={message}/>
      ))}
    </div>
  );
}

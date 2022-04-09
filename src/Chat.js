import Message from "./Message";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "./firebase_config";
import { useEffect, useRef, useState } from "react";
import SendBar from "./SendBar";
import "./style/Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState(null);
  // reference per autoscroll
  const messagesEndRef = useRef(null);
  useEffect(() => {
    onSnapshot(
      query(collection(firestore, "messages"), orderBy("sended_at")),
      (querySnapshot) => {
        setMessages(querySnapshot);
      }
    );
  }, []);

  useEffect(() => {
    if (messages) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (messages === null) {
    return <h1>Initializing messages...</h1>;
  }

  return (
    <div className="Chat">
      {messages.docs.map((message, index) => (
        <Message
          key={index}
          text={message.data().text}
          photo_url={message.data().sender_img}
          sender_name={message.data().sender_name}
          sender_uid={message.data().sender_uid}
          sended_at={message.data().sended_at}
        />
      ))}
      <div ref={messagesEndRef}></div>

      <SendBar />
    </div>
  );
}

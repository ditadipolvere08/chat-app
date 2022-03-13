import Message from "./Message";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { firestore } from "./firebase_config";
import { useEffect, useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState(null);

  async function refreshMessages() {
    setMessages(
      await getDocs(
        query(collection(firestore, "messages"), orderBy("sended_at"))
      )
    );
  }

  useEffect(() => {
    refreshMessages();
  }, []);

  if (messages === null) {
    return <h1>Initializing messages...</h1>;
  }

  return (
    <div className="Chat">
      {messages.docs.map((message, index) => (
        <Message
          key={index}
          text={message.data().text}
          photoUrl={message.data().sender_img}
          sender_name={message.data().sender_name}
          sender_uid={message.data().sender_uid}
        />
      ))}
    </div>
  );
}

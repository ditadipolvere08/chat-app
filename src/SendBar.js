import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, firestore } from "./firebase_config";
import "./style/SendBar.css";

export default function SendBar(params) {
  const user = auth.currentUser

  function submitMessage(event) {
    event.preventDefault();
    const text = event.target.message.value;
    if (text === "") {
      return;
    }
    addDoc(collection(firestore, "messages"), {
      text: text,
      sender_uid: user.uid,
      sender_img: user.photoURL,
      sender_name: user.displayName,
      sended_at: Timestamp.now(),
    });
    event.target.message.value = null;
  }

  return (
    <form onSubmit={submitMessage} className="SendBar">
      <input
        type="text"
        placeholder="Messaggio"
        name="message"
        className="messageInput"
      />
      <input type="submit" value="Invia" className="submitButton" />
    </form>
  );
}

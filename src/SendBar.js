import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, firestore } from "./firebase_config";
import "./style/SendBar.css";

export default function SendBar(params) {
  const user = auth.currentUser

  function submitMessage(event) {
    const text = event.target.message.value;
    if (text === "") {
      event.preventDefault();
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
    event.preventDefault();
  }
  if (user === null) return <h1>Initializing...</h1>

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

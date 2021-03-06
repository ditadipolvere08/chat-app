import { auth } from "./firebase_config";
import "./style/Message.css";

export default function Message(params) {
  const user = auth.currentUser;

  return (
    <div
      className={params.sender_uid === user.uid ? "msg sended" : "msg received"}
    >
      <img
        referrerPolicy="no-referrer"
        className="msgPhoto"
        src={params.photo_url}
        alt={"Profile_image"}
      />
      <div className="textDiv">
        <p className="senderName">{params.sender_name}</p>
        <p className="msgText">{params.text}</p>{" "}
        <p className="timestamp">
          {params.sended_at.toDate().toLocaleString()}
        </p>
      </div>
    </div>
  );
}

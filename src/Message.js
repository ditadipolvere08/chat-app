import { auth } from "./firebase_config"
import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import './Message.css'

export default function Message(params) {
    const msg = params.msg
    const [user, setUser] = useState(null)
    onAuthStateChanged(auth, user=>setUser(user))
    if (user === null) return <h1>Initializing ...</h1>
    return (
        <div className="msg">
            <img className="msgPhoto" src={user.photoURL} alt={"TODO"}/>
            <p className="msgText">{msg}</p>
        </div>
    )
}
import { login_google } from "./authentication";

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login_google}>Sign in with Google</button>
    </div>
  );
}

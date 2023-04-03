import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "../css/loginpage.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login_main">
      <div>
        <h1>GoToHell</h1>
      </div>

      <div className="login_div">
        <div className="login_text1">
          Are you traveler? <br />
          We are traveler!
        </div>
      </div>
      <div className="login_div">
        <span className="login_text2_1">구글</span>
        <span className="login_text2_2">로 1초만에 로그인 해보세요</span>
      </div>
      <div className="login_div">
        <button className="google_button" onClick={signInwithGoogle}>
          구글로 계속하기
        </button>
      </div>

      <div className="text3">또는</div>

      <div className="login_from">
        <div>아이디</div>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sigin In</button>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

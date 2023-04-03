import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "../css/loginpage.css";

export const LoginPage = () => {
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
        <div>
          <div className="text4">이메일</div>
          <input
            className="email_box"
            type="text"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <div className="text4">비밀번호</div>
          <input
            className="password_box"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="submit_div">
          <button className="submit_button" onClick={signIn}>
            확인
          </button>
        </div>

        <div className="login_div">
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

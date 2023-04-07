import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "../css/loginpage.css";
import { authService, googleProvider } from "../../fbase";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      signIn();
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(authService, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(auth);
          navigate("/");
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(authService, googleProvider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      });
      console.log(authService);
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
            onKeyDown={handleEnter}
          />
        </div>

        <div className="submit_div">
          <button className="submit_button" onClick={signIn}>
            확인
          </button>
        </div>

        <div className="array_account">
          <Link path="/">
            <div>아이디 및 비밀번호 찾기</div>
          </Link>
          <Link to="/SignupPage">
            <div>신규 회원가입</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

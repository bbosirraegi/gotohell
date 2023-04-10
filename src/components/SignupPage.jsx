import { useState } from "react";
import { authService, storage } from "../../fbase";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState();

  const ImagePreview = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(
      (resolve) =>
        (reader.onload = () => {
          setImageSrc(reader.result);
          resolve;
        })
    );
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      if (image) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`users/${user.uid}/profile.jpg`);
        await imageRef.put(image);
        const photoURL = await imageRef.getDownloadURL();
        await user.updateProfile({
          displayName: name,
          photoURL: photoURL,
        });
        navigate("/login");
      } else {
        await user.updateProfile({
          displayName: name,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      ImagePreview(e.target.files[0]);
    }
  };

  return (
    <div className="sign_main">
      <div className="sign_title">
        <h1>GoToHell</h1>
      </div>

      <div className="sign_hi">
        안녕하세요! <br />
        여행자님을 알려주세요!
      </div>
      <form onSubmit={handleSignUp} className="sign_form">
        <label>
          <div className="sign_email_text">이메일</div>
          <input
            type="email"
            className="sign_email_box"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <div className="sign_password_text">비밀번호</div>
          <input
            type="password"
            className="sign_password_box"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <div className="sign_name_text">이름</div>
          <input
            type="text"
            className="sign_name_box"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <div className="sign_img_box">
          <div className="sign_img_text">프로필사진</div>
          <input
            type="file"
            className="sign_img_input"
            accept="image/*"
            id="file"
            onChange={handleImageChange}
          />
        </div>
        <div className="sign_img_preview">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="preview-img"
              width="150px"
              height="150px"
            />
          )}
        </div>
        <br />
        <button type="submit" className="sign_submit_button">
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;

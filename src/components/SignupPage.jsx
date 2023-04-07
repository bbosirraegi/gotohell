import { useState } from "react";
import { authService, storage } from "../../fbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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
    }
  };

  return (
    <div>
    <form onSubmit={handleSignUp}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );

}

export default SignUpPage;

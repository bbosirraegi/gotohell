import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomeIcon from "@mui/icons-material/Home";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Header = () => {
  const [checkpage, setCheckpage] = useState(0);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user != null) {
    const displayname = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
  }

  return (
    <div className="mainlayout-navi-box">
      <h3 className="mainlayout-navi-title">
        <Link to="/" className="mainlayout-navi-link">
          GoToHell
        </Link>
      </h3>
      <div className="mainlayout-navi-linkbox">
        <Link to="/" className="mainlayout-navi-link">
          <HomeIcon />
          <span className="mainlayout-navi-text">홈</span>
        </Link>
        <Link to="/about" className="mainlayout-navi-link">
          <InsertCommentIcon />
          <span className="mainlayout-navi-text">토픽</span>
        </Link>
        <Link to="/login" className="mainlayout-navi-link">
          <NotificationsIcon />
          <span className="mainlayout-navi-text">알림</span>
        </Link>

        <div className="mainlayout-navi-horizen">
          <RemoveSharpIcon />
        </div>

        <Link to="/login" className="mainlayout-navi-link">
          <ControlPointIcon />
          <span className="mainlayout-navi-text">글쓰기</span>
        </Link>
      </div>
      <div className="mainlayout-navi-login">
        <div className="mainlayout-navi-profile">
          <AccountCircleSharpIcon fontSize="large" className="mainlayout-navi-profile-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Header;

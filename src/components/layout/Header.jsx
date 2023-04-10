import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../../fbase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../../css/SignupPage.css";

import HomeIcon from "@mui/icons-material/Home";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = authService.currentUser;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(authService);
      setIsLoggedIn(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user != null) {
        const displayname = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

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

        <div>
          {isLoggedIn === true ? (
            <Link to="/notice" className="mainlayout-navi-link">
              <NotificationsIcon />
              <span className="mainlayout-navi-text">알림</span>
            </Link>
          ) : (
            <Link to="/login" className="mainlayout-navi-link">
              <NotificationsIcon />
              <span className="mainlayout-navi-text">알림</span>
            </Link>
          )}
        </div>
        <div className="mainlayout-navi-horizen">
          <RemoveSharpIcon />
        </div>

        <div>
          {isLoggedIn === true ? (
            <Link to="/notice" className="mainlayout-navi-link">
              <ControlPointIcon />
              <span className="mainlayout-navi-text">글쓰기</span>
            </Link>
          ) : (
            <Link to="/login" className="mainlayout-navi-link">
              <ControlPointIcon />
              <span className="mainlayout-navi-text">글쓰기</span>
            </Link>
          )}
        </div>
      </div>

      <>
        <div>
          {isLoggedIn === true ? (
            user.photoURL !== null ? (
              <>
                <div className="mainlayout-navi-profile">
                  <img
                    className="mainlayout-navi-profile-icon"
                    src={user.photoURL}
                  />
                </div>

                <div onClick={() => logout()}>LogOut</div>
              </>
            ) : (
              <>
                {user.displayName}
                <div onClick={() => logout()}>LogOut</div>
              </>
            )
          ) : (
            <div className="mainlayout-navi-login">
              <div className="mainlayout-navi-profileiconbox">
                <Link to="login">
                  <AccountCircleSharpIcon
                    fontSize="large"
                    className="mainlayout-navi-profile-icon"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Header;

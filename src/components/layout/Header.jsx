import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Header = () => {

  const [ checkpage, setCheckpage ] = useState( 0 );

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
        <Link to="/signin" className="mainlayout-navi-link">
          <NotificationsIcon />
          <span className="mainlayout-navi-text">알림</span>
        </Link>
        <Link to="/signup" className="mainlayout-navi-link">
          <ControlPointIcon />
          <span className="mainlayout-navi-text">글쓰기</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

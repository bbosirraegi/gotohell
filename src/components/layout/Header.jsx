import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Header = () => {
    return (
        <div className="mainlayout-navi-box">
            <h3 className="mainlayout-navi-title">
                GoToHell
            </h3>
            <div className="mainlayout-navi-linkbox">
                <Link to="/" className="mainlayout-navi-link">
                    <HomeIcon />
                    홈
                </Link>
                <Link to="/about" className="mainlayout-navi-link">
                    <InsertCommentIcon />
                    토픽
                </Link>
                <Link to="/signin" className="mainlayout-navi-link">
                    <NotificationsIcon />
                    알림
                </Link>
                <Link to="/signup" className="mainlayout-navi-link">
                    <ControlPointIcon />
                    글쓰기
                </Link>
            </div>
        </div>
    )
}

export default Header
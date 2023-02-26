import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Header = () => {
    return (
        <div class="mainlayout-navi-box">
            <h3 class="mainlayout-navi-title">
                GoToHell
            </h3>
            <div class="mainlayout-navi-linkbox">
                <Link to="/" class="mainlayout-navi-link">
                    <HomeIcon />
                    홈
                </Link>
                <Link to="/about" class="mainlayout-navi-link">
                    <InsertCommentIcon />
                    토픽
                </Link>
                <Link to="/signin" class="mainlayout-navi-link">
                    <NotificationsIcon />
                    알림
                </Link>
                <Link to="/signup" class="mainlayout-navi-link">
                    <ControlPointIcon />
                    글쓰기
                </Link>
            </div>
        </div>
    )
}

export default Header
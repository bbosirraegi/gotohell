import React from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import '../css/profile.css';

const Profile = (props) => {
  const { info } = props;

  return (
    <div className="profile-component-container">
      <div className="profile-component-box profile-component-box-imgbox">
        <img
          className="profile-component-box-imgbox-img"
          src={info.img}
          alt="img"
        />
      </div>
      <div className="profile-component-box profile-component-box-namebox">
        <p className="profile-component-box-namebox-name">{info.writer}</p>
        <div className="profile-component-box-namebox-namebox">
          <p className="profile-component-box-namebox-namebox-location">
            <MyLocationIcon />
            {info.location}
          </p>
          <p className="profile-component-box-namebox-namebox-time">
            {info.date}
          </p>
        </div>
      </div>
      <div className="profile-component-box profile-component-box-infobox">
        <p>...</p>
      </div>
    </div>
  );
};

export default Profile;

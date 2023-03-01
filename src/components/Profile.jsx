import React from 'react';
import '../css/profile.css';

const Profile = (props) => {
  const { info } = props;

  return (
    <div className="profile-page-container">
      <div className="profile-page-imgbox">
        <img src={info.img} className="profile-page-img" />
      </div>

      <div className="profile-page-inforbox">
        <p className="profile-page-name">{info.name}</p>
        <div className="profile-page-placebox">
          <p className="profile-page-location">{info.location}</p>
          <p className="profile-page-date">{info.date}</p>
        </div>
      </div>

      <div className="profile-page-morebox">...</div>
    </div>
  );
};

export default Profile;

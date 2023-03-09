import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BestTopic from '../BestTopic';
import '../../css/mainlayout.css';

const MainLayout = () => {
  return (
    <div className="mainlayout">
      <div className="mainlayout-navi">
        {/* 컴포넌트 */}
        <Header />
      </div>
      <div className="mainlayout-main">
        <div className="mainlayout-main-titlebox">
          <p className="">커뮤니티</p>
        </div>
        <Outlet />
      </div>
      <div className="mainlayout-sub">
        {/* 컴포넌트 */}
        <BestTopic />
      </div>
    </div>
  );
};

export default MainLayout;

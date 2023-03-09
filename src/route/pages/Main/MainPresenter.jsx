import React, { useState } from 'react';
import Tag from '../../../components/Tag';
import Profile from '../../../components/Profile';
import MainContent from './Components/MainContent';
import '../../../css/main.css';

const initial = {
  id: 1,
  writer: 'Hanho',
  img: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/274/7027cb95124b3f17ce9564ab797805e2.jpeg',
  location: 'Busan',
  date: '2023년 03월 01일 15시 32분',
};

const MainPresenter = () => {
  const [test, setTest] = useState(initial);

  return (
    <div className="main-page-container">
      <div className="main-page-contentbox">
        <Profile info={test} />
        {/* 내용 컴포넌트 */}
        <div className="main-page-contenbox-content">
          <p>내용</p>
        </div>
        <Tag style={{ padding: '2%' }} />
      </div>
    </div>
  );
};

export default MainPresenter;

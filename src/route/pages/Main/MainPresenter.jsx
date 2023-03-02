import React, { useState } from 'react';
import Tag from '../../../components/Tag';
import Profile from '../../../components/Profile';
import '../../../css/main.css';

const initial = {
  id: 1,
  name: 'Hanho',
  img: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/274/7027cb95124b3f17ce9564ab797805e2.jpeg',
  location: 'Busan',
  date: '2023년 03월 01일 15시 32분',
};

const MainPresenter = () => {
  const [test, setTest] = useState(initial);

  return (
    <div className="main-page-container">
      <Profile info={test} />
      <Tag />
    </div>
  );
};

export default MainPresenter;

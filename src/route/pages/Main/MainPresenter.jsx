import React, { useState } from 'react';

import Profile from 'components/Profile';
import Maincontent from './Components/MainContent';

import 'css/main.css';

const initial = [
  {
    id: 1,
    title: 'Title1',
    content:
      '가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하',
    // content: 'Content1Content1Content1Content1Content1Content1Content1',
    writer: 'Hanho',
    img: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/274/7027cb95124b3f17ce9564ab797805e2.jpeg',
    location: 'Busan',
    date: '2023년 03월 01일 15시 32분',
    contentimg: [
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__340.jpg',
      'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg',
      'https://static.wixstatic.com/media/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg/v1/fill/w_200,h_1080,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg',
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__340.jpg',
    ],
    heartCount: '32',
    commentCount: '100',
  },
  {
    id: 2,
    title: 'Title2',
    content: '가나다라마바사아자차카타파하가나다라마바사아자차카타파하',
    // content: 'Content1Content1Content1Content1Content1Content1Content1',
    writer: 'Hanho',
    img: 'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/274/7027cb95124b3f17ce9564ab797805e2.jpeg',
    location: 'Busan',
    date: '2023년 03월 01일 15시 32분',
    contentimg: [
      'https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731__340.jpg',
      'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg',
    ],
    heartCount: '10',
    commentCount: '0',
  },
  {
    id: 3,
    title: 'Title3',
    content:
      'Content3Content3Content3Content3Content3Content3Content3Content3Content3',
    writer: 'WOW',
    img: 'https://static.wixstatic.com/media/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg/v1/fill/w_200,h_1080,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg',
    location: 'Mountain',
    date: '2222년 02월 22일 22시 22분',
    contentimg: [],
    heartCount: '0',
    commentCount: '0',
  },
];

const MainPresenter = () => {
  const [test, setTest] = useState(initial);

  return (
    <div className="main-page-container">
      <div className="main-page-contentbox main-page-contentbox-border">
        <Profile info={test[0]} />
        {/* 내용 컴포넌트 */}
        <Maincontent info={test[0]} />
      </div>

      <div className="main-page-contentbox main-page-contentbox-border">
        <Profile info={test[0]} />
        {/* 내용 컴포넌트 */}
        <Maincontent info={test[1]} />
      </div>
    </div>
  );
};

export default MainPresenter;

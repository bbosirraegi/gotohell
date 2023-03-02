import React, { useState } from 'react';
import '../css/tag.css';


const initial = [
  {
    id: 1,
    title: 'test1',
    content: '일본갓다왔음',
    // 작성자 정보
    tag: [
      '오사카',
      '도쿄',
      '닌텐도',
      '테스트1',
      '테스트2',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3테스트3테스트3테스트3',
    ],
  },  {
    id: 1,
    title: 'test1',
    content: '일본갓다왔음',
    // 작성자 정보
    tag: [
      '오사카',
      '도쿄',
      '닌텐도',
      '테스트1',
      '테스트2',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3',
      '테스트3테스트3테스트3테스트3',
    ],
  },
];

const Tag = () => {
  const [testtag, setTesttag] = useState(initial);

  console.log('TESTTAG');
  console.log(testtag);

  console.log('TESTTAG.TAG');
  console.log(testtag.tag);

  const test = testtag.tag;

  // 이게 맞나?
  return (
    <div className="component-tag-container">
      <div className="component-tag-tagbox">
        {testtag.map((key) =>
          key.tag.map((test) => <p className="component-tag-tag"># {test}</p>)
        )}
      </div>
    </div>
  );
};

export default Tag;


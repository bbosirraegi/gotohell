import React, { useState } from 'react';
import '../css/tag.css';

const initial = {
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
    '테스트4',
    '테스트5',
    '테스트6',
    '테스트7',
    '테스트8',
    '테스트9',
    '테스트3테스트3테스트3테스트3',
  ],
};

const Tag = ({ style }) => {
  const [testtag, setTesttag] = useState(initial);

  const test = testtag.tag;

  // 이게 맞나?
  return (
    <div className="component-tag-container" style={style}>
      <div className="component-tag-tagbox">
        {test.map((key) => (
          <p key={key} className="component-tag-tag">
            # {key}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tag;

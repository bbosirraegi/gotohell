import React from 'react';

import Tag from 'components/Tag';
import { AiOutlineHeart } from 'react-icons/ai';
import 'css/main.css';

const Maincontent = (props) => {
  const { title, content, contentimg } = props;

  const length = contentimg.length;

  return (
    <div className="main-page-contentbox">
      {/* Title */}
      <p className="main-page-contentbox-title">{title}</p>

      {/* Content */}
      {content.length >= 60 ? (
        <div className="main-page-contentbox-content">
          <span>{content.substring(0, 60)}</span>
          <span className="main-page-contentbox-content-more"> ... 더보기</span>
        </div>
      ) : (
        <div className="main-page-contentbox-content">
          <span>{content}</span>
        </div>
      )}

      {/* Tag */}
      <Tag />

      {/* ImgBox */}
      {length > 4 ? (
        /* 이미지가 5개 이상 */
        <div
          className="main-page-contentbox-imgbox-overbox"
          style={{ '--contentimg': 2 }}
        >
          {contentimg.map((item, index) => (
            <div
              className="main-page-contentbox-imgbox-overbox"
              style={{ '--contentimg': 2 }}
            >
              <span className="main-page-contentbox-imgbox-span">
                <img className="main-page-contentbox-img" src={item} />
              </span>
            </div>
          ))}
        </div>
      ) : length === 4 ? (
        // 이미지가 4개
        <div
          className="main-page-contentbox-imgbox"
          style={{ '--contentline': 2 }}
        >
          {contentimg.map((item, index) => (
            <div
              className="main-page-contentbox-imgbox-underbox"
              style={{ '--contentimg': 2 }}
            >
              <span className="main-page-contentbox-imgbox-span">
                <img className="main-page-contentbox-img" src={item} />
              </span>
            </div>
          ))}
        </div>
      ) : (
        // 이미지가 3개 이하
        <div
          className="main-page-contentbox-imgbox"
          style={{ '--contentline': length }}
        >
          {contentimg.map((item, index) => (
            <div
              className="main-page-contentbox-imgbox-underbox"
              style={{ '--contentimg': length }}
            >
              <span className="main-page-contentbox-imgbox-span">
                <img className="main-page-contentbox-img" src={item} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* 피드백 */}
      {contentimg.length > 3 ? (
        <div className="main-page-contentbox-feedbackbox-over">
          <AiOutlineHeart /> Feed Back Is Here!
        </div>
      ) : (
        <div className="main-page-contentbox-feedbackbox-under">
          <AiOutlineHeart /> Feed Back Is Here!
        </div>
      )}
    </div>
  );
};

export default Maincontent;

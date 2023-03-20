import React from 'react';

import Tag from 'components/Tag';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { RiBookmarkLine } from 'react-icons/ri';
import { BsShare } from 'react-icons/bs';
import 'css/main.css';

const Maincontent = (props) => {
  const { title, content, contentimg, heartCount, commentCount } = props.info;

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
      <div
        className={
          contentimg.length > 3
            ? 'main-page-contentbox-feedbackbox-over'
            : 'main-page-contentbox-feedbackbox-under'
        }
      >
        <div className="main-page-contentbox-feedbackbox-leftbox">
          <div className="cursor">
            <AiOutlineHeart className="main-page-contentbox-feedback-leftbox-icons" />
            <span>{heartCount}</span>
          </div>
          <div className="main-page-contentbox-feedback-leftbox-commentbox cursor">
            <BiMessageRounded className="main-page-contentbox-feedback-leftbox-icons" />
            <span>{commentCount}</span>
          </div>
        </div>
        <div className="main-page-contentbox-feedbackbox-rightbox">
          <div className="cursor">
            <RiBookmarkLine />
            <BsShare className="main-page-contentbox-feedbackbox-last" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;

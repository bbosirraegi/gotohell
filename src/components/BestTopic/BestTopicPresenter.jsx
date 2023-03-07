import React from "react";
import { Link } from "react-router-dom";
import "../../css/besttopic.css";
// IMAGE
import attendimg from "../../img/attend.png";
import BestTopicImg from "../../img/SingCong.png";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const BestTopicPresenter = (props) => {
  const { topicList } = props;
  const { searchText } = props;
  const { InsertText } = props;
  const { onSubmitSearch } = props;
  const { shuffle } = props;

  return (
    <div className="poppop">
      {/* UI 구성 */}
      <div className="Topic_Main">
        <div className="Attend">
          <a href="https://www.naver.com" target={"_blank"}>
            <img src={attendimg} className="attend_img" />
          </a>
        </div>

        <div className="Search">
          <div className="Search_Icon">
            <SearchIcon />
          </div>
          <input
            className="Search_Topic"
            placeholder="어떤 여행이 궁금하신가요?"
            outline="none"
            onChange={InsertText}
            value={searchText}
            onKeyDown={onSubmitSearch}
          />
        </div>
        <div className="Best_Topic_Top">
          <span className="Best_Topic_Text">베스트 게시글</span>
          <a href="/#" className="Best_Topic_Link">
            전체 보기 {" >"}
          </a>
        </div>

        {topicList
          .sort(() => Math.random() - 0.5)
          .slice(0,3)
          .map((item) => {
            return (
              <div className="Best_Topic" key={item.id}>
                <div className="Best_Topic_Frame">
                  <div className="Best_Topic_Title">
                    <Link to="/">{item.title}</Link>
                  </div>
                  <div className="Best_Topic_PostText">
                    <Link to="/">{item.contents}</Link>
                  </div>
                </div>
                <div className="Best_Topic_Img_Box">
                  <Link to="/">
                    <img src={BestTopicImg} className="Best_Topic_Img" />
                  </Link>
                </div>
              </div>
            );
          })}

        <div className="Footerrrrrr">
          <span className="CopyRight">
            <Link to="/">개인정보처리 방침 </Link>
          </span>
          <span className="CopyRight">|</span>
          <span className="CopyRight">
            <Link to="/">이용약관</Link>
          </span>
          <span className="CopyRight">|</span>

          <span className="CopyRight">
            <Link to="/">서비스 정보 수신 동의 </Link>
          </span>
          <div className="GTH_Details">
            <details style={{}}>
              <summary>GTH</summary>
              <span>
                <br />
                이메일 : 몰라
                <br />
                사업자등록번호 : 111 - 11 - 11111
                <br />
                이름 : 알빠야?
                <br />
                직책 : 개인정보
                <br />
                보호책임자 메일 : 몰?루
                <br />
                주소 : 부산광역시 금정구 부산대학로63번길 2
                <br />
                통신판매업번호 : 없음
              </span>
            </details>
          </div>

          <div className="SNS">
            <Link to="/" className="SNS_ICONS">
              <InstagramIcon />
            </Link>
            <Link to="/" className="SNS_ICONS">
              <FacebookIcon />
            </Link>
            <Link to="/" className="SNS_ICONS">
              <YouTubeIcon />
            </Link>
            <Link to="/" className="SNS_ICONS">
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTopicPresenter;

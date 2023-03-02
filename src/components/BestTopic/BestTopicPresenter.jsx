import React from "react";
import "../../css/besttopic.css";
import { Link } from "react-router-dom";
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
  const { searchText, setSearchText } = props;
  const { InsertText } = props;
  const { onSubmitSearch } = props;

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

        {topicList.map((item) => {
          return (
            <div className="Best_Topic">
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
BestTopicPresenter.defaultProps = {
  topicList: [
    {
      id: 0,
      title: "할슈타트, 여름☀️ 혹은 겨울❄️",
      contents: `할슈타트의 여름과 겨울, 
      여러분은 언제가 더 맘에 드시나요? 😊
      
      할슈타트 🇦🇹 
      개인적으로 유럽 여행하면서 가장 만족했던 곳이고
      저의 최애 도시 중 하나입니다 :)
      좋았던 기억을 되살려 겨울에도 다시 방문해봤는데요!!
      
      여름에는 싱그럽고 활기찬 분위기에 아름다운 자연의 모습을 만끽할 수 있었고,
      겨울에는 조금 더 정적인 분위기의 겨울왕국(!?) 느낌! 조금 추웠지만 포근한 기분을 느낄 수 있었어요 ;)
      `,
    },
    {
      id: 1,
      title: "할슈타트, 여름☀️ 혹은 겨울❄️",
      contents: `할슈타트의 여름과 겨울, 
      여러분은 언제가 더 맘에 드시나요? 😊
      
      할슈타트 🇦🇹 
      개인적으로 유럽 여행하면서 가장 만족했던 곳이고
      저의 최애 도시 중 하나입니다 :)
      좋았던 기억을 되살려 겨울에도 다시 방문해봤는데요!!
      
      여름에는 싱그럽고 활기찬 분위기에 아름다운 자연의 모습을 만끽할 수 있었고,
      겨울에는 조금 더 정적인 분위기의 겨울왕국(!?) 느낌! 조금 추웠지만 포근한 기분을 느낄 수 있었어요 ;)
      `,
    },
    {
      id: 2,
      title: "할슈타트, 여름☀️ 혹은 겨울❄️",
      contents: `할슈타트의 여름과 겨울, 
      여러분은 언제가 더 맘에 드시나요? 😊
      
      할슈타트 🇦🇹 
      개인적으로 유럽 여행하면서 가장 만족했던 곳이고
      저의 최애 도시 중 하나입니다 :)
      좋았던 기억을 되살려 겨울에도 다시 방문해봤는데요!!
      
      여름에는 싱그럽고 활기찬 분위기에 아름다운 자연의 모습을 만끽할 수 있었고,
      겨울에는 조금 더 정적인 분위기의 겨울왕국(!?) 느낌! 조금 추웠지만 포근한 기분을 느낄 수 있었어요 ;)
      `,
    },
  ],
};
export default BestTopicPresenter;

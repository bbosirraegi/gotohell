import React, { useRef, useState } from "react";
import "../../css/besttopic.css";
import attendimg from "../../img/attend.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

const BestTopicPresenter = (props) => {
  const [searchText, setSearchText] = useState("");
  const { testfunction, testchange } = props;
  const navigate = useNavigate();

  const InsertText = (e) => {
    setSearchText(e.target.value);
  };

  const onReset = (e) => {
    setSearchText("");
  };

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      onReset();
      return navigate("/#");
    }
  };

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
          <div>
            <span className="Best_Topic_Text">베스트 게시글</span>
          </div>
          <a href="/#" className="Best_Topic_Link">
            전체 보기 {" >"}
          </a>
        </div>
        <div className="Best_Topic_1">
          sdfsdf
          <hr className="Under_Line" />
        </div>
        {/* <div className="test">
          <button onClick={testfunction}>wow</button>
          <input type="text" name="title" onChange={testchange} />
        </div> */}
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
          <div>
            <details>
              <summary>GTH</summary>
              <span>
                <br />
                이메일 : 몰라
                <br />
                사업자등록번호 : 111 - 11 - 11111
                <br />
                이름 : 알빠야? <br />
                직책 : 개인정보
                <br />
                보호책임자 메일 : <br />
                주소 : 부산광역시 금정구 부산대학로63번길 2
                <br />
                통신판매업번호 : 없음
              </span>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTopicPresenter;

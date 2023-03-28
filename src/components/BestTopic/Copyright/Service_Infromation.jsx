import React from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useNavigate } from "react-router-dom";
import "../../../css/copyright.css";

function Service_Information() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="main_screen">
      <div className="title">
        <ArrowBackSharpIcon onClick={() => goBack()} />
        <h1>서비스 정보 수신 동의</h1>
      </div>
      <div className="text">
        Hoo ooh ooh ooh ooh
        <br /> Hoo ooh ooh ooh
        <br />
        <br /> Stay in the middle <br />
        Like you a little
        <br /> Don't want no riddle <br />
        말해줘 say it back, oh, say it ditto
        <br /> 아침은 너무 멀어 so say it ditto <br />
        <br />
        훌쩍 커버렸어 <br />
        함께한 기억처럼 <br />널 보는 내 마음은 <br />
        어느새 여름 지나 가을
        <br />
        기다렸지 all this time <br />
        <br />
        Do you want somebody <br />
        Like I want somebody?
        <br /> 날 보고 웃었지만 <br />
        Do you think about me now? Yeah <br />
        All the time, yeah, all the time <br />
        <br />I got no time to lose
        <br /> 내 길었던 하루, 난 보고 싶어
        <br /> Ra-ta-ta-ta 울린 심장 (Ra-ta-ta-ta) <br />I got nothing to lose
        <br /> 널 좋아한다고 ooh-whoa, ooh-whoa, ooh-whoa <br />
        Ra-ta-ta-ta 울린 심장 (Ra-ta-ta-ta)
        <br /> But I don't want to
        <br />
        <br />
        Stay in the middle
        <br /> Like you a little <br />
        Don't want no riddle <br />
        말해줘 say it back, oh, say it ditto <br />
        아침은 너무 멀어 so say it ditto
        <br />
        <br />
        I don't want to walk in this 미로 <br />다 아는 건 아니어도 <br />
        바라던 대로 말해줘 say it back <br />
        Oh, say it ditto <br />I want you so, want you, so say it ditto
        <br />
        <br />
        Not just anybody <br />
        너를 상상했지
        <br /> 항상 닿아있던
        <br /> 처음 느낌 그대로 난<br />
        기다렸지 all this time <br />I got nothing to lose
        <br /> 널 좋아한다고 ooh-whoa, ooh-whoa,
        <br /> ooh-whoa Ra-ta-ta-ta 울린 심장 (Ra-ta-ta-ta)
        <br /> But I don't want to
        <br />
        <br />
        Stay in the middle
        <br /> Like you a little <br />
        Don't want no riddle <br />
        말해줘 say it back, oh, say it ditto <br />
        <br />
        아침은 너무 멀어 so say it ditto
        <br /> I don't want to walk in this 미로 <br />다 아는 건 아니어도
        <br /> 바라던 대로 말해줘 say it back
        <br /> Oh, say it ditto
        <br /> I want you so, want you, so say it ditto
        <br />
        <br /> Hoo ooh ooh ooh ooh
        <br /> Hoo ooh ooh ooh
      </div>
    </div>
  );
}

export default Service_Information;

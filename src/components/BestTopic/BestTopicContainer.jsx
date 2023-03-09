import React, { useState } from "react";
import BestTopicPresenter from "./BestTopicPresenter";

const BestTopicContainer = () => {
  /* Router */

  /* State */
  const initialState = {
    title: "",
    content: "",
  };

  const [testState, setTestState] = useState(0);
  const [contentInfo, setContentInfo] = useState(initialState);
  const [topicList, setTopicList] = useState();
  const [searchText, setSearchText] = useState("");
  const [ArrowIcon, setArrowIcon] = useState(false)

  /* Functions */
  const testfuncion = () => {
    setTestState(testState + 1);

    console.log("TESTSTATE : " + testState);

    console.log("ContentInfo : " + contentInfo.title);
  };

  const testchange = (e) => {
    setContentInfo({ ...contentInfo, [e.target.name]: e.target.value });
    console.log("TITLE : " + contentInfo.title);
  };

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
  
  const toggleMenu = () =>{
    setArrowIcon(!ArrowIcon)
  }

  
  /* Hooks */

  /* Render */

  return (
    <BestTopicPresenter
      testfunction={testfuncion}
      testchange={testchange}
      topicList={topicList}
      searchText={searchText}
      InsertText={InsertText}
      onSubmitSearch={onSubmitSearch}
      toggleMenu={toggleMenu}
      ArrowIcon={ArrowIcon}
    />
  );
};

BestTopicPresenter.defaultProps = {
  topicList: [
    {
      id: 0,
      title: "0.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      title: "1.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      title: "2.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 3,
      title: "3.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 4,
      title: "4.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 5,
      title: "5.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 6,
      title: "6.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 7,
      title: "7.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 8,
      title: "8.할슈타트, 여름☀️ 혹은 겨울❄️",
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
      id: 9,
      title: "9.할슈타트, 여름☀️ 혹은 겨울❄️",
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

export default BestTopicContainer;

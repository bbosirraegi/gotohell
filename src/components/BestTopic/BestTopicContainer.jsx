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
  /* Hooks */

  /* Render */

  return (
    <BestTopicPresenter
      testfunction={testfuncion}
      testchange={testchange}
      topicList={topicList}
      searchText={searchText}
      setSearchText={setSearchText}
      InsertText={InsertText}
      onSubmitSearch={onSubmitSearch}
    />
  );
};

export default BestTopicContainer;

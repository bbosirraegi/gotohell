import React from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useNavigate } from "react-router-dom";
import "../../../css/copyright.css";

function Terms_Page() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="main_screen">
      <div className="title">
        <ArrowBackSharpIcon onClick={() => goBack()} />
        <h1>이용약관</h1>
      </div>

      <div className="text">
        부대찌개는 다양한 재료와 풍부한 맛으로 인기 있는 음식 중 하나입니다.
        <br />
        <br />
        아래는 많은 재료를 활용한 부대찌개 레시피입니다. <br />
        <br />
        [재료]
        <br />
        <br /> 돼지고기 (150g)
        <br /> 소세지 (3개) <br />
        명태 (50g)
        <br /> 두부 (1/2모)
        <br /> 양파 (1개)
        <br />
        대파 (1/2대)
        <br /> 청양고추 (1개) <br />
        미나리 (적당량) <br />
        숙주나물 (적당량)
        <br /> 떡볶이 떡 (100g) <br />
        참기름 (1큰술)
        <br /> 김치 (1컵)
        <br /> 물 (6컵) <br />
        <br />
        [양념재료] <br />
        <br />
        고춧가루 (3큰술)
        <br />
        고추장 (2큰술)
        <br /> 간장 (2큰술) <br />
        다진마늘 (2큰술)
        <br /> 설탕 (1큰술)
        <br /> 후추 (적당량)
        <br />
        <br />
        [레시피]
        <br />
        <br /> 미리 떡볶이 떡은 물에 불립니다.
        <br />
        <br /> 돼지고기와 명태는 적당한 크기로 잘라서 소금 후 찬물에 불려서
        국물에 넣을 준비를 합니다.
        <br />
        <br /> 양파, 대파, 청양고추는 적당한 크기로 썰어 준비합니다.
        <br />
        <br /> 팬에 참기름을 두르고, 양파와 대파를 볶다가 김치를 넣어 볶습니다.{" "}
        <br />
        <br />
        국물용 냄비에 6컵의 물과 떡볶이 떡을 넣고 끓이다가 불린 돼지고기와 명태,
        소세지를 넣어줍니다.
        <br />
        <br /> 양념재료를 섞어서 양념장을 만들어 국물에 넣어줍니다. <br />
        <br />
        끓기 시작한 국물에 볶은 김치와 양념장을 넣어줍니다.
        <br />
        <br /> 두부와 청양고추, 미나리, 숙주나물을 넣어 적당히 끓여줍니다.{" "}
        <br />
        <br />
        마지막으로 불린 떡볶이 떡을 넣어서 5분정도 더 끓인 후 완성합니다.
        <br />
        <br /> 다양한 재료와 양념으로 풍부한 맛을 살린 부대찌개를 즐겨보세요!
      </div>
    </div>
  );
}

export default Terms_Page;

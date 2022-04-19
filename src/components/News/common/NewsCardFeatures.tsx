import React from "react";
import styled from "@emotion/styled";
import Bookmark from "../../common/Icon/bookmark";
import ShareIcon from "../../common/Icon/share";
const NewsCardFeatures = ({ handleTranslateActive, article }: any) => {
  
  return (
    <Feautres>
      <button className="translate" onClick={handleTranslateActive}>
        번역
      </button>
      <div>
        <Bookmark
          article={article}
        ></Bookmark>
        <ShareIcon></ShareIcon>
      </div>
    </Feautres>
  );
};
export default NewsCardFeatures;
const Feautres = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 20px 0;
  .translate {
    width: 70px;
    height: 100%;
    background: #4d4d4d;
    color: white;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  }
  div {
    display: flex;
    height: 100%;
  }
`;



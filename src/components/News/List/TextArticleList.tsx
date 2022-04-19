import styled from "@emotion/styled";
import React from "react";
import TextArticle from "./TextArticle";

const TextArticleList = ({ newListData }: any) => {
  return (
    <TextArticleView>
      {newListData.map((article: any, index: number) => (
        <TextArticle key={`${index}-${article.newsId}`} {...article} />
      ))}
    </TextArticleView>
  );
};

export default TextArticleList;
const TextArticleView = styled.div`
  width: 100%;
`;

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ImageArticle from "./ImageArticle";
export type NewsItemType = {
  assetTags: string;
  brandImgUrl: string;
  brandName: string;
  brandUrl: string;
  description: string;
  imageUrl: string;
  language: string;
  mediaType: string;
  newsId: string;
  publishTime: string;
  title: string;
  url: string;
};
const Opacity = keyframes`
  0%  {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
  `;
interface Props {
  newListData: [];
}

const ImageArticleList = ({ newListData }: Props) => {
  return (
    <ImageArticleView>
      {newListData.map((article: NewsItemType, index: number) => (
        <ImageArticle
          key={`${index}-${article.newsId}`}
          {...article}
          article={article}
          NewsListAnimation={Opacity}
        />
      ))}
    </ImageArticleView>
  );
};
export default ImageArticleList;
const ImageArticleView = styled.div`
  column-count: 3;
  column-gap: 20px;
  column-width: 400px;
`;

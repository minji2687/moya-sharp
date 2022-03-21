import styled from "@emotion/styled";
import TextArticleList from "./TextArticleList";
import ImageArticleList from "./ImageArticleList";
import CommonContainer from "./../../layout/CommonContainer";
import { useAppSelector } from "../../../redux/hooks";
import { useNewsFormats } from "./../hooks/useNewsFormat";

// 이미지 형식 텍스트 형식으로 기사를 전환시킵니다
const PostFilterView = () => {
  const { NewsFormats } = useNewsFormats();
  const { newListData, loading } = useAppSelector(state => state.newsList);

  return (
    <CommonContainer>
      {loading ? (
        <div>....isLoading</div>
      ) : (
        <>
          {(function test() {
            if (NewsFormats === "Image") {
              return (
                <ImageContent>
                  <ImageArticleList newListData={newListData} />
                </ImageContent>
              );
            } else if (NewsFormats === "Text") {
              return (
                <TextContent>
                  <TextArticleList newListData={newListData} />;
                </TextContent>
              );
            }
          })()}
        </>
      )}
    </CommonContainer>
  );
};

export default PostFilterView;

const ImageContent = styled.div`
  column-count: 3;
  column-gap: 20px;
  padding-bottom: 280px;
  padding-top: 50px;
`;
const TextContent = styled.div`
  width: 100%;
  padding-bottom: 280px;
`;
//데이터를 [0]번째 인덱스만 출력하게해라

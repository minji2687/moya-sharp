import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import { useNewsFormats } from "../hooks/useNewsFormat";
import { RootState } from "../../../redux/store";
import { StringParam, useQueryParams } from "use-query-params";
import Container from "../../common/layout/Container";
import ImageArticleList from "./ImageArticleList";
import TextArticleList from "./TextArticleList";
import Spinner from "../common/Spinner";
import Observer from "./Observer";

const List = () => {
  const { NewsFormats } = useNewsFormats();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.newsList
  );

  const dispatch = useAppDispatch();
  const [query] = useQueryParams({
    orderBy: StringParam,
    keyType: StringParam,
    paramValue: StringParam,
    language: StringParam,
    timeFilter: StringParam,
    mediaType: StringParam,
    exchange: StringParam
  });

  useEffect(() => {
    const isLoadFirst = !loading && data.length === 0;
    function getFirstPageNewsList() {
      if (isLoadFirst) {
        dispatch(fetchNewList({ ...query }));
        console.log("첫번째 페이지 데이터");
      }
    }
    getFirstPageNewsList();
  }, [data.length, dispatch, loading, query]);
  console.log(data, "데이터");
  return (
    <Wrap>
      <Container>
        {NewsFormats === "Image" && <ImageArticleList newListData={data} />}
        {NewsFormats === "Text" && <TextArticleList newListData={data} />}
      </Container>
      <Spinner loading={loading}></Spinner>
      {!loading && (
        <Observer
          options={{
            threshold: 0.3,
            rootMargin: "0px 0px  0px 0px",
            trackVisibility: true,
            delay: 4000,
            skip: error ? true : false
          }}
          query={query}
        />
      )}
    </Wrap>
  );
};

export default List;
const Wrap = styled.section``;

import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchNewList } from "../../../redux/news/newsListSlice";

interface Props {
  options: object;
  query: object;
}
const Observer = ({ options, query }: Props) => {
  const [ref, inView] = useInView(options);
  const { data, loading, nextPageToken } = useAppSelector(
    state => state.newsList
  );
  const dispatch = useAppDispatch();
  const isLoadMore = !loading && inView && data.length !== 0;

  useEffect(() => {
    function getNextPageNewsList() {
      if (isLoadMore) dispatch(fetchNewList({ ...query, nextPageToken }));
      console.log("다음 페이지 데이터");
    }
    getNextPageNewsList();
  }, [dispatch, isLoadMore, nextPageToken, query]);

  return <InfinityScrollView ref={ref}>무한스크롤 탐지</InfinityScrollView>;
};
export default Observer;
const InfinityScrollView = styled.div`
  font-size: 0;
`;

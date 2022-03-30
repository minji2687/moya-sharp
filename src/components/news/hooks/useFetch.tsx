import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { SearchTitleType } from "../../../api/newsListApi";
import { useSearch } from "../../../hooks/useSearch";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import { SetStateAction, useEffect, useState } from "react";
import { cameltoCababString } from "../../../utils/utils";

export const useFetch = () => {
  const { data } = useAppSelector(state => state.newsList.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  type State = "top" | "latest" | "popular";

  const [sortFilter, setSortFilter] = useState<State>("top");
  const [identifiers, setIdentifiers] = useState("");
  const { language, timeFilter, categories } = useSearch();

  //정렬을 조회한다
  useEffect(() => {
    const searchNews = async (searchTitle?: SearchTitleType, str?: string) => {
      const identifier = str ? str : identifiers;
      if (str) {
        cameltoCababString(str);
      }
      const searchPayload = {
        order_by: sortFilter,
        searchTitle,
        identifiers: identifier,
        language,
        timeFilter,
        categories
      };
      try {
        const search = await dispatch(fetchNewList(searchPayload));
        navigate(`/news/${cameltoCababString(identifier)}`);
        return search;
      } catch (error) {
        console.log("searchError", error);
      }
    };
    searchNews();
  }, [
    sortFilter,
    identifiers,
    language,
    timeFilter,
    categories,
    dispatch,
    navigate
  ]);

  function updateSortState(option: SetStateAction<State>) {
    setSortFilter(option);
  }

  return;
};

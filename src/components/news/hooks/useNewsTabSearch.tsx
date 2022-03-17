//탭을 클릭 할때마다 키워드 API를 쏘게합니다
import { useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { fetchNewList } from "../../../redux/news/newsListSlice";
import { SearchTitleType } from "../../../api/newsListApi";
import { CameltoCababString } from "../../../utils";
import { useAppDispatch } from "../../../redux/hooks";
import { useNewsTabList } from "./useNewsTabList";
export const useNewsTabSearch = () => {
  const { language, timeFilter,identifiers,categories} = useSearch();
  const dispatch = useAppDispatch()
  const searchTabKeywordNews = (myKeyword:string,searchTitle?: SearchTitleType) => {
    const searchPayload = {
      searchTitle,
      identifiers: myKeyword,
      language,
      timeFilter,
      categories
    };
    dispatch(fetchNewList(searchPayload));
  };
  return {searchTabKeywordNews};
};

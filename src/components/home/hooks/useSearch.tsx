import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { fetchNewList } from "../../../redux/news/newsListSlice";
export const useSearch = () => {
  const dispatch = useAppDispatch();

  const [language, setLanguage] = useState("en");
  const [timeFilter, setTimeFilter] = useState("m5");
  const [mediaType, setMediaType] = useState("mp,op,r");

  const searchNews = async (
    keyType: string | null | undefined,
    paramValue: string | null | undefined,
    exchange?: string | null | undefined,
    orderBy = "top"
  ) => {
    const searchPayload = {
      orderBy,
      keyType,
      paramValue,
      language,
      timeFilter,
      mediaType,
      ...(exchange && { exchange })
    };
    console.log("searchPayload", searchPayload);
    dispatch(fetchNewList(searchPayload));
  };

  return {
    setLanguage,
    setTimeFilter,
    setMediaType,
    searchNews,
    language,
    timeFilter,
    mediaType
  };
};
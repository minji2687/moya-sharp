import { useState } from "react";
import {
  addOneBookmark,
  deleteBookmark
} from "../../../redux/bookmark/bookmarkSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { NewsItemType } from "../list/ImageArticleList";

export const useNewsCommon = () => {
  const [isBookmark, setIsbookmark] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function addBookmark(bookmarkItem: NewsItemType) {
    console.log("add", bookmarkItem);
    dispatch(addOneBookmark(bookmarkItem));
  }

  function deleteBookmark(bookmarkItem: NewsItemType) {
    // dispatch(deleteBookmark(bookmarkItem));
  }

  return { isBookmark, setIsbookmark, addBookmark, deleteBookmark };
};

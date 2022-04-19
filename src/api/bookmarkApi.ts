import { NewsItemType } from "../components/news/list/ImageArticleList";
// import api from "./Api";
import axios from "axios";

const BOOKMARK_API_URL = "/preferNews";

type NewsID = Pick<NewsItemType, "newsId">;

export async function createBookmarkApi(bookmarkNewsId: NewsID) {
  const data = await axios.post(`${BOOKMARK_API_URL}`, {
    newsId: bookmarkNewsId
  });
  console.log("api crate data", data);
  return data;
}

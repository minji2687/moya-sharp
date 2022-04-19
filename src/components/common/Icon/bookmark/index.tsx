import { useNewsCommon } from "../../../news/hooks/useNewCommon";
import BookMarkIcon from "./BookMarkIcon";
const Bookmark = ({ article }: any) => {
  const { isBookmark, setIsbookmark, addBookmark, deleteBookmark } =
    useNewsCommon();

  function bookmarkEventbind(isBookmarked: boolean) {
    setIsbookmark(!isBookmark);
    if (isBookmarked) {
      addBookmark(article);
    } else {
      deleteBookmark(article);
    }
  }
  return (
    <div
      role="button"
      className="bookmark"
      onClick={() => bookmarkEventbind(!isBookmark)}
    >
      <BookMarkIcon />
    </div>
  );
};

export default Bookmark;

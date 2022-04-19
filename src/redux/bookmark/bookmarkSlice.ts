import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { createBookmarkApi } from "../../api/bookmarkApi";
import { NewsItemType } from "../../components/news/list/ImageArticleList";

type bookmarkInitialState = {
  bookmarkListData: Array<NewsItemType>;
};

const initialState: bookmarkInitialState = {
  bookmarkListData: []
};

const bookmark = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addOneBookmark: (
      state: bookmarkInitialState,
      action: PayloadAction<NewsItemType>
    ) => {
      console.log("addOneBookmark action", action);
      state.bookmarkListData.push(action.payload);
    },
    deleteBookmark: (
      state: bookmarkInitialState,
      action: PayloadAction<NewsItemType>
    ) => {
      state.bookmarkListData.filter(
        bookmark => bookmark.newsId !== action.payload.newsId
      );
    }
  }
});
export const { addOneBookmark, deleteBookmark } = bookmark.actions;
export default bookmark.reducer;

//saga
const READ_BOOKMARKLIST_SAGA_START = "GET_BOOKMARKLIST_SAGA_START";
const CREATE_BOOKMARKLIST_SAGA_START = "POST_BOOKMARKLIST_SAGA_START";

function* readBookmarkSaga(action: Action) {
  // const data: Array<NewsItemType> = yield call(Bookmark.read);
  // yield put(addBookmark(data));
}

function* createBookmarkSaga(action: PayloadAction) {
  // console.log("createBookmarkSaga action", action);
  // const data: AxiosResponse = yield call(
  //   createBookmarkApi,
  //   action.payload.userID
  // );
  // const bookmarkItem = action.payload;
  // yield put(addOneBookmark(action.payload.userID));
}

export function readBookmark(payload: NewsItemType) {
  console.log("readBookmark payload", payload);

  return {
    type: READ_BOOKMARKLIST_SAGA_START,
    payload
  };
}

export function createBookmark(payload: NewsItemType) {
  console.log("createBookmark payload", payload);
  return {
    type: CREATE_BOOKMARKLIST_SAGA_START,
    payload
  };
}

export function* bookmarkListSaga() {
  yield takeEvery(READ_BOOKMARKLIST_SAGA_START, readBookmarkSaga);
  yield takeEvery(CREATE_BOOKMARKLIST_SAGA_START, createBookmarkSaga);
}

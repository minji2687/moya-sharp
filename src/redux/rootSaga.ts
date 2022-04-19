import { all } from "redux-saga/effects";
import { bookmarkListSaga } from "./bookmark/bookmarkSlice";
import { newsListSaga } from "./news/newsListSlice";
import { authSaga } from "./user/auth";
export function* rootSaga() {
  // all 은 여러 사가를 동시에 실행시켜준다.

  yield all([newsListSaga(), authSaga(), bookmarkListSaga()]);
}

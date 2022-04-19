import { put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getNewList, SearchType } from "../../api/newsListApi";
import { Action } from "redux-actions";
import * as Effects from "redux-saga/effects";
import { fetchNews } from "../../api/newsApi";

const call: any = Effects.call;

export const NEWSLIST_START = "NEWSLIST_START";
export const NEWSLIST_SUCCESS = "NEWSLIST_SUCCESS";
export const NEWSLIST_FAIL = "NEWSLIST_FAIL";
export const NEWSLIST_RESET = "NEWSLIST_RESET";
// 액션 생성 함수
export function getNewslistStart() {
  return {
    type: NEWSLIST_START
  };
}

export function getNewslistSuccess(data: any) {
  return {
    type: NEWSLIST_SUCCESS,
    data
  };
}
export function getNewslistFail(error: any) {
  return {
    type: NEWSLIST_FAIL,
    error
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null,
  nextPageToken: undefined
};
type State = {
  loading: any;
  data: any;
  error: any;
  nextPageToken: string | undefined;
};
export default function reducer(state: State = initialState, action: any) {
  switch (action.type) {
    case NEWSLIST_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case NEWSLIST_SUCCESS:
      return {
        loading: false,
        data: [...state.data, ...action.data.newsList],
        nextPageToken: action.data.nextPageToken,
        error: null
      };

    case NEWSLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case NEWSLIST_RESET:
      return {
        loading: false,
        data: [],
        error: null,
        nextPageToken: undefined
      };

    default:
      return state;
  }
}

//saga

const NEWSLIST_SAGA_START = "NEWSLIST_SAGA_START";

type data = {
  data: [];
  nextPageToken: string;
};

function isExchange(action: Action<SearchType>) {
  const {
    orderBy,
    keyType,
    paramValue,
    language,
    timeFilter,
    mediaType,
    exchange
  } = action.payload;
  if (action.payload.exchange) {
    const query = `/news?orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}&language=${language}&timeFilter=${timeFilter}&mediaType=${mediaType}&exchange=${exchange}`;
    return query;
  } else {
    const query = `/news?orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}&language=${language}&timeFilter=${timeFilter}&mediaType=${mediaType}`;
    return query;
  }
}

function* getNewslistSaga(action: Action<SearchType>) {
  const { keyType, paramValue, nextPageToken } = action.payload;
  try {
    yield put(getNewslistStart());
    if (
      keyType === "sectors" ||
      keyType === "startup" ||
      keyType === "category"
    ) {
      console.log("getNewslistSaga", action);
      const data: data = yield call(fetchNews, {
        keyType,
        paramValue,
        nextPageToken
      });
      yield put(push(isExchange(action)));
      yield put(getNewslistSuccess(data));
    } else {
      const data: data = yield call(getNewList, {
        ...action.payload,
        ...(nextPageToken && { nextPageToken })
      });
      yield put(push(`/news/${paramValue}`));
      yield put(getNewslistSuccess(data));
    }
  } catch (error) {
    yield put(getNewslistFail(error));
  }
}

export function initAction() {
  return {
    type: NEWSLIST_RESET
  };
}

export function fetchNewList(payload: any) {
  return {
    type: NEWSLIST_SAGA_START,
    payload
  };
}

export function* newsListSaga() {
  yield takeLatest(NEWSLIST_SAGA_START, getNewslistSaga);
}

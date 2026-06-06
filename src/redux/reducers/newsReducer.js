import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCCESS,
} from "../types/newsConstants";

const initialState = {
  news: null,
  isLoading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return { ...state, isLoading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return { ...state, isLoading: false, news: action.payload };
    case FETCH_NEWS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export { newsReducer };
import {
  FETCH_NEWS_PENDING,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
} from "../types/newsConstants";

import { newsAxios } from "../../services/axiosInstance";
import { useSelector } from "react-redux";

export const fetchNewsPending = () => {
  return {
    type: FETCH_NEWS_PENDING,
  };
};

export const fetchNewsError = (error) => {
  return {
    type: FETCH_NEWS_ERROR,
    payload: error,
  };
};

export const fetchNewsSuccess = (data) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchNews = (category = "", search = "") => {
  return async (dispatch, getState) => {
    dispatch(fetchNewsPending());

    const { preferences } =
      getState().authenticationReducer;

    const language = preferences?.language || "en";

    try {
      const params = {
        apikey: import.meta.env.VITE_NEWS_API_KEY,
        country: "in",
        language,
      };

      if (category) {
        params.category = category;
      }

      if (search.trim()) {
        params.q = search.trim();
      }

      const response = await newsAxios.get("", {
        params,
      });

      dispatch(fetchNewsSuccess(response.data.results));
    } catch (error) {
      dispatch(fetchNewsError(error.message));
    }
  };
};
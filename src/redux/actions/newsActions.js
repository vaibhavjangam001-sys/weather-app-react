import {
  FETCH_NEWS_PENDING,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
} from "../types/newsConstants";

import { newsAxios } from "../../services/axiosInstance";

export const fetchNews = (category = "", search = "") => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_NEWS_PENDING });

    const { preferences } = getState().authenticationReducer;
    const language = preferences?.language || "en";

    try {
      const params = {
        country: "in",
        language,
        apikey: import.meta.env.VITE_NEWS_API_KEY,
      };

      if (category) params.category = category;
      if (search.trim()) params.q = search.trim();

      const response = await newsAxios.get("/api/1/latest", { params });
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data.results });
    } catch (error) {
      dispatch({ type: FETCH_NEWS_ERROR, payload: error.message });
    }
  };
};
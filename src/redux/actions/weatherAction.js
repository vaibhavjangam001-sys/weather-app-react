import { weatherAxios, foreCastAxios } from "../../services/axios/axiosInstance";
import {
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../constant/weatherConstants";

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};

export const fetchWeatherSuccess = (data) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};

export const fetchForeCastPending = () => {
  return {
    type: FETCH_FORECAST_PENDING,
  };
};

export const fetchForeCastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};

export const fetchForeCastError = (error) => {
  return {
    type: FETCH_FORECAST_ERROR,
    payload: error,
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherPending());

    try {
      const API_KEY = import.meta.env.VITE_API_KEY;

      const weatherData = await weatherAxios.get("/data/2.5/weather", {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });

      dispatch(fetchWeatherSuccess(weatherData.data));
    } catch (error) {
      dispatch(fetchWeatherError(error));
    }
  };
};

export const fetchForeCast = (city) => {
  return async (dispatch) => {
    dispatch(fetchForeCastPending());

    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const foreCastData = await foreCastAxios.get("/data/2.5/forecast", {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });

      dispatch(fetchForeCastSuccess(foreCastData.data.list));
    } catch (error) {
      dispatch(fetchForeCastError(error));
    }
  };
};

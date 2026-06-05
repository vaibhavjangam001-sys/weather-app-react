import { weatherAxios, geoAxios } from "../../services/axiosInstance";
import {
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../types/weatherConstants";

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
      const geoResponse = await geoAxios.get("/v1/search", {
        params: {
          name: city,
          count: 1,
          language: "en",
          format: "json",
        },
      });

      const location = geoResponse.data.results?.[0];

      if (!location) {
        throw new Error("City not Found");
      }

      const weatherResponse = await weatherAxios.get("/v1/forecast", {
        params: {
          latitude: location.latitude,
          longitude: location.longitude,

          current:
            "temperature_2m,apparent_temperature,weather_code,relative_humidity_2m,pressure_msl,wind_speed_10m,wind_direction_10m",

          hourly:
            "temperature_2m,weather_code,visibility,cloud_cover,precipitation,wind_gusts_10m",

          daily:
            "temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset",

          timezone: "auto",
        },
      });

      dispatch(
        fetchWeatherSuccess({
          ...weatherResponse.data,
          city: location.name,
        }),
      );
    } catch (error) {
      dispatch(fetchWeatherError(error.message));
    }
  };
};

import {
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_PENDING,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../constant/weatherConstants";

const initialState = {
  city: "aurangabad",
  weather: null,
  foreCast: null,
  isLoading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === FETCH_WEATHER_PENDING) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  } else if (action.type === FETCH_WEATHER_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  } else if (action.type === FETCH_WEATHER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      weather: action.payload,
    };
  } else if (action.type === FETCH_FORECAST_PENDING) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  } else if (action.type === FETCH_FORECAST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  } else if (action.type === FETCH_FORECAST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      foreCast: action.payload,
    };
  } else if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else {
    return state;
  }
};

export { weatherReducer };

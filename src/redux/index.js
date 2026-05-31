import { combineReducers } from "redux";
import { weatherReducer } from "./reducer/weatherReducer";
import { newsReducer } from "./reducer/newsReducer";

const rootReducer = combineReducers({
  weatherReducer,
  newsReducer,
});

export default rootReducer;

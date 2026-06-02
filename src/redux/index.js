import { combineReducers } from "redux";
import { weatherReducer } from "./reducer/weatherReducer";
import { newsReducer } from "./reducer/newsReducer";
import { authenticationReducer } from "./reducer/authenticationReducer";

const rootReducer = combineReducers({
  weatherReducer,
  newsReducer,
  authenticationReducer,
});

export default rootReducer;

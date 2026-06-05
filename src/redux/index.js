import { combineReducers } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import { newsReducer } from "./reducers/newsReducer";
import { authenticationReducer } from "./reducers/authenticationReducer"

const rootReducer = combineReducers({
  weatherReducer,
  newsReducer,
  authenticationReducer,
});

export default rootReducer;

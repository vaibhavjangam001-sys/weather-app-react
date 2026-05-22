import { combineReducers } from "redux";
import { weatherReducer } from './reducer/weatherReducer';


const rootReducer = combineReducers({
    weatherReducer,
})

export default rootReducer;
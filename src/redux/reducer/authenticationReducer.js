import {
  FETCH_USERS_DATA_ERROR,
  FETCH_USERS_DATA_SUCCESS,
  FETCH_USERS_DATA_PENDING,
} from "../constants/authenticationConstants";


const initialState = {
    usersData : null,
    isLoading : false,
    error : null,
    isLoging : false,
}
import { combineReducers } from "redux";
import commentReducer from "reducers/Comments";
import authReducer from "reducers/auth";

export default combineReducers({
  comments: commentReducer,
  auth: authReducer
});

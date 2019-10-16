import { SAVE_COMMENTS } from "actions/types";
import { FETCH_COMMENTS } from "actions/types";
import axios from "axios";
import { CHANGE_AUTH } from "./types";

export function saveComments(comments) {
  return {
    type: SAVE_COMMENTS,
    payload: comments
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

import commentReducer from "reducers/Comments";
import { SAVE_COMMENTS } from "actions/types";

it("it handles actions type save comments", () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: "New Comment"
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handle action with unknown type", () => {
  const newState = commentReducer([], { type: "kjskjfgkg", payload: "" });
  expect(newState).toEqual([]);
});

import { SAVE_COMMENTS } from "actions/types";
import { FETCH_COMMENTS } from "actions/types";

export default function(state = [], actions) {
  switch (actions.type) {
    case SAVE_COMMENTS:
      return [...state, actions.payload];
    case FETCH_COMMENTS:
      const comment = actions.payload.data.map(comment => comment.name);
      return [...state,...comment];
    default:
      return state;
  }
}

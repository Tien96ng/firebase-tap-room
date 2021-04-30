import { SHOW_KEG_FORM } from "../actions/ActionTypes";

export default function showKegFormReducer(state = false, action) {
  switch(action.type) {
    case SHOW_KEG_FORM:
      return !state;
    default:
      return state;
  }
}
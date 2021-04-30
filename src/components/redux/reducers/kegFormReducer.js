export default function kegFormReducer(state = false, action) {
  switch(action.type) {
    case "KEG_FORM":
      return !state
  }
}
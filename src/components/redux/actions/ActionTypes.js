export const SHOW_KEG_FORM = "SHOW_KEG_FORM";
export const RESET_KEG_FORM = "RESET_KEG_FORM";
export const KEG_SUBMISSION = "KEG_SUBMISSION";


export const handleFormChange = field => ({
  type: "HANDLE_FORM_CHANGE",
  payload: field
});

export const handleSellKeg = id => ({
  type: "HANDLE_SELL_KEG",
  payload: id
})
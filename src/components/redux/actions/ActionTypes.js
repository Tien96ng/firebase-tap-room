export const SHOW_KEG_FORM = "SHOW_KEG_FORM"; // done
export const RESET_KEG_FORM = "RESET_KEG_FORM";
export const KEG_SUBMISSION = "KEG_SUBMISSION";

// Done
export const handleFormChange = (e, field) => ({
  type: "HANDLE_FORM_CHANGE",
  event: e,
  payload: field
});

// Done
export const handleSellKeg = id => ({
  type: "HANDLE_SELL_KEG",
  payload: id
})
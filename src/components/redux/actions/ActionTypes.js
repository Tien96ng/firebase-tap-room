
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

export const handleShowKegForm = () => ({
  type: "SHOW_KEG_FORM"
})

export const handleKegSubmission = () => ({
  type: "KEG_SUBMISSION"
})

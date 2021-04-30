
export const handleFormChange = (e, field) => ({
  type: "HANDLE_FORM_CHANGE",
  value: e.target.value,
  payload: field
});

export const handleSellKeg = id => ({
  type: "HANDLE_SELL_KEG",
  payload: id
})

export const handleShowKegForm = () => ({
  type: "SHOW_KEG_FORM"
})

export const handleKegSubmission = e => ({
  type: "KEG_SUBMISSION",
  payload: e
})

import * as action from "../../components/redux/actions/actions";
import * as constant from "../../components/redux/actionConstants/constants";

describe("Tap room actions", () => {
  it("handleSellKeg should create HANDLE_SELL_KEG action", () => {
    expect(action.handleSellKeg(1)).toEqual({
      type: constant.HANDLE_SELL_KEG,
      payload: 1
    });
  });


  it("handleShowKegForm should create SHOW_KEG_FORM action", () => {
    expect(action.handleShowKegForm()).toEqual({
      type: constant.SHOW_KEG_FORM,
    });
  });

  it("handleKegSubmission should create KEG_SUBMISSION action", () => {
    expect(action.handleKegSubmission({
      name: "elysian atomic",
      brand: "elysian",
      price: 2,
      alcoholContent: 4,
      flavor: "caramel",
      remainingPints: 100
    })).toEqual({
      type: constant.KEG_SUBMISSION,
      payload: {
        name: "elysian atomic",
        brand: "elysian",
        price: 2,
        alcoholContent: 4,
        flavor: "caramel",
        remainingPints: 100
      }
    });
  });

  it("handleFormChange should create HANDLE_FORM_CHANGE action", () => {
    expect(action.handleFormChange({target: "e"}, "name")).toEqual({
      type: constant.HANDLE_FORM_CHANGE,
      value: undefined,
      payload: "name"
    });
  });
})
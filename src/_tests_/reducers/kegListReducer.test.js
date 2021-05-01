import * as constant from "../../components/redux/actionConstants/constants";
import kegListReducer from "../../components/redux/reducers/kegListReducer";
import * as kegData from "../../data/kegData";

describe("kegListReducer", () => {
  let action;
  const testKeg = {
    name: "TEST NAME",
    brand: "TEST BRAND",
    price: 1,
    alcoholContent: 1,
    flavor: "TEST FLAVOR",
    remainingPints: 1
  }
  const testState = {
    kegList: kegData,
    showKegForm: false,
    newKeg: {
      name: "",
      brand: "",
      price: 1,
      alcoholContent: 1,
      flavor: "",
      remainingPints: 1
    }
  }

  test("Should return default state if no action type is recognized", () => {
    expect(kegListReducer(testState, { type: "NOTHING" })).toEqual(testState);
  });

  test("Should return opposite of previous boolean state", () => {
    expect(kegListReducer(testState.showKegForm, { type: constant.SHOW_KEG_FORM })).toEqual({"showKegForm": !testState.showKegForm});
  });
})
import * as constant from "../../components/redux/actionConstants/constants";
import kegListReducer from "../../components/redux/reducers/kegListReducer";

describe("kegListReducer", () => {
  const testState = {
    kegList: [],
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

})
import * as keg from "../actionConstants/constants"
import * as kegData from "../../../data/kegData";

const kegState = {
  kegList: kegData.default,
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

export default function kegListReducer(state = kegState, action) {
  switch(action.type) {
    case keg.SHOW_KEG_FORM:
      return {
        ...state,
        showKegForm: !state.showKegForm
      }
    case keg.HANDLE_SELL_KEG:
      let tempList = [...state.kegList];
      tempList[action.payload].remainingPints -= 1;
      return {
        ...state,
        kegList: tempList
      }
    case keg.HANDLE_FORM_CHANGE: 
      let tempKeg = {...state.newKeg};
      tempKeg[action.payload] = action.value;
      return {
        ...state,
        newKeg: tempKeg
      }
    case keg.KEG_SUBMISSION:
      action.payload.preventDefault();
      let tempNewKeg = {...state.newKeg};
      tempNewKeg.name = tempNewKeg.name.toUpperCase();
      tempNewKeg.brand = tempNewKeg.brand.slice(0, 1).toUpperCase() + tempNewKeg.brand.slice(1).toLowerCase();
      tempNewKeg.flavor = tempNewKeg.flavor.slice(0, 1).toUpperCase() + tempNewKeg.flavor.slice(1).toLowerCase();
      
      let emptyKeg = {
        name: "",
        brand: "",
        price: 1,
        alcoholContent: 1,
        flavor: "",
        remainingPints: 1
      }  
      
      return {
        ...state,
        kegList: state.kegList.concat(tempNewKeg),
        newKeg: emptyKeg,
        showKegForm: !state.showKegForm
      }
    default:
      return state;
  }
}
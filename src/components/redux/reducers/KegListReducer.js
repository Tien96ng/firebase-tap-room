import kegData from '../../data/kegData';
import * as keg from "../actions/ActionTypes";

const state = {
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

export default function kegListReducer(state = state, action) {
  switch(action.type) {
    case keg.SHOW_KEG_FORM:
      return {
        ...state,
        showKegForm: !state.showKegForm
      }
    case keg.handleSellKeg:
      let tempList = state.kegList;
      tempList[action.payload].remainingPints -= 1;
      return {
        ...state,
        kegList: tempList
      }
    case keg.handleFormChange: 
      let tempKeg = state.newKeg;
      tempKeg[action.payload] = action.e.target.value;
      return {
        ...state,
        newKeg: tempKeg
      }
    case keg.KEG_SUBMISSION:
      let tempKeg = this.state.newKeg;
      tempKeg.name = tempKeg.name.toUpperCase();
      tempKeg.brand = tempKeg.brand.slice(0, 1).toUpperCase() + tempKeg.brand.slice(1).toLowerCase();
      tempKeg.flavor = tempKeg.flavor.slice(0, 1).toUpperCase() + tempKeg.flavor.slice(1).toLowerCase();
      
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
        kegList: state.kegList.concat(tempKeg),
        newKeg: emptyKeg,
        showKegForm: !state.showKegForm
      }
    default:
      return state;
  }
}
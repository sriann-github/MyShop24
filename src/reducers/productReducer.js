import { PRODUCT_LIST_FAIL } from "../constants/productDispatcher";
import { PRODUCT_LIST_SUCCESS } from "../constants/productDispatcher";
import { PRODUCT_LIST_REQUEST } from "../constants/productDispatcher";

export const productListReducer = (state = {products: []}, action) => {

  switch(action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading: true, products: []}
    
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload}

    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}

    default:
      return state
  }
}
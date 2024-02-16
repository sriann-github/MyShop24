import {CART_ACTION_FAIL, CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartDispatcher'

export const cartReducer = (state = {cartItems: []}, action) =>
{
  switch(action.type)
  {
    case CART_ADD_ITEM:
      const item =  action.payload
      const existItem = state.cartItems.find(x => x.productId === item.productId)
      if(existItem)
      {
        item.qty = existItem.qty + item.qty
        return{
          ...state,
          cartItems: state.cartItems.map(x => x.productId === item.productId ? item : x)
        }
      }else{
        return {
          // First it makes a copy of the state items and then creates a property that's an array from the state called cartItems, and then it appends the current object (item) to the array
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART_REMOVE_ITEM:
      return{
        ...state,
        cartItems: state.cartItems.filter(x => x.productId !== action.payload)
      }
    case CART_ACTION_FAIL:
      return {...state}
      
    case CART_SAVE_SHIPPING_ADDRESS:
      return {...state,
        shippingAddress: action.payload
      }
    case CART_SAVE_PAYMENT_METHOD:
      return{
        ...state,
        paymentMethod: action.payload
      }

    default:
      return state
  }
}
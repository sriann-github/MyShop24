import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ACTION_FAIL, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_ADDRESS } from '../constants/cartDispatcher'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try{
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      productId: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}catch(error)
{
  dispatch({
    type: CART_ACTION_FAIL,
    payload: 
      error.response && error.response.data.message ? error.response.data.message: error.message
  })
}

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems) )
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems) )
}
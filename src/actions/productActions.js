import axios from 'axios'
import { PRODUCT_DETAILS_FAIL, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productDispatcher"

export const listProducts = () => async (dispatch) =>{
  try{
  dispatch({
    type: PRODUCT_LIST_REQUEST
  })
  const {data} = await axios.get('/api/products')
  dispatch({
    type: PRODUCT_LIST_SUCCESS,
    payload: data
  })
  }catch(error){
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: 
        error.response && error.response.data.message ? error.response.data.message: error.message
    })

  }
}

export const productDetails = (id) => async (dispatch) => {
  try{
  dispatch({
    type: PRODUCT_LIST_REQUEST})
  
  const {data} = await axios.get(`/api/products/${id}`)
  dispatch({
    type: PRODUCT_LIST_SUCCESS,
    payload: data
  })
}catch(error){
  dispatch({
    type: PRODUCT_DETAILS_FAIL,
    payload: error.response && error.response.data.message ? error.response.data.message : error.message
  })
}
}


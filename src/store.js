import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
})
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {}
})

export default store
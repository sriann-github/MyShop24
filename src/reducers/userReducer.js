import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch(action.type){
    case USER_LOGIN_REQUEST :
      return {loading: true}
    case USER_LOGIN_SUCCESS :
      return {loadong: false, userInfo: action.payload}
    case USER_LOGIN_FAIL :
      return{loading: false, error: action.payload}
    case USER_LOGOUT :
      //Wipe out all the data from store
      return {}
    default:
      return state
  }
}
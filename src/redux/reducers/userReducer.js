import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    USER_ERROR,
    UPDATE_USER
} from '../types'
  
const initialState = {
    access_token: localStorage.getItem('access_token'),
    isAuthenticated: null,
    loading: true,
    user: null
}
  
function userReducer(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload.user
        }
    //   case REGISTER_SUCCESS:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
        localStorage.setItem('access_token', payload.access_token)
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        }
    case UPDATE_USER:
      return {
        ...state,
        ...payload,
      }

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('access_token')
      return {
        ...state,
        access_token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      }
      case USER_ERROR:
      case REGISTER_FAIL:
      default:
        return state;
    }
}
  
export default userReducer


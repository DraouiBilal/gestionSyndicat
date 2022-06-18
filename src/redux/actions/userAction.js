import axios from 'axios'
import { setAlert } from './alertAction'
import setAuthToken from '../../utils/setAuthToken'
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  UPDATE_USER,
  USER_ERROR
} from '../types'

// Load User
export const loadUser = () => async dispatch => {
  console.log("load");
    try {
      setAuthToken(localStorage.getItem("access_token"))
      const res = await axios.get('/profile') 
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: AUTH_ERROR
      })
    }
}

//Signup user
export const signup = (body) => async dispatch =>{

  const config = {
    headers:{
      'Content-Type':'application/json'
    }
  }
  try {
    await axios.post('/register',body,config)
    dispatch({
      type:REGISTER_SUCCESS
    })
    dispatch(setAlert('User added succesfully','success'))
    dispatch(loadUser())
  } catch (err) {
      
    console.log(err.response);
    dispatch({
      type: REGISTER_FAIL
    })
  }

}

// Login User
export const login = (email, password) => async dispatch => {
  console.log("login");

    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    const body = { email, password }
    try {
      const res = await axios.post('/login', body, config)
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      dispatch(loadUser())
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(err.response);
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
      dispatch({
        type: LOGIN_FAIL
      })
    }
}

// update User
export const update = (formData) => async dispatch => {
  console.log("update");

  const config = {
    headers:{
      'Content-Type':'application/json'
    }
  }
  
  formData.password==='' && delete formData.password

  const body = formData
  try {
    const res = await axios.put('/profile', body, config)
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    })
    dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err.response);
  
    dispatch({
      type: USER_ERROR
    })
  }
}


// Logout
export const logout = () => async dispatch => {
  console.log("logout");
  try {
    await axios.put('/logout')
    dispatch({ type: LOGOUT })
  }catch(err){
    console.log(err.response);
    dispatch({
      type: AUTH_ERROR
    })
  }
}
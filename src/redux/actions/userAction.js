import axios from "axios";
import { setAlert } from "./alertAction";
import setAuthToken from "../../utils/setAuthToken";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  UPDATE_USER,
  USER_ERROR,
  ADD_PROPRIETAIRE,
} from "../types";

// Load User
export const loadUser = () => async (dispatch) => {
  console.log("load");
  try {
    setAuthToken(localStorage.getItem("access_token"));
    const res = await axios.get("/profile");
    const users = await axios.get("/users");
    dispatch({
      type: USER_LOADED,
      payload: {
        user: {
          ...res.data.user,
          users: users.data.users,
        },
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Signup user
export const signup = (body) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post("/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
    });
    dispatch(loadUser());
    dispatch(setAlert("Registered succesfully", "success"));
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = { email, password };
  try {
    const res = await axios.post("/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Successfully logged in","success"))
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err.response);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// update User
export const update = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  formData.password === "" && delete formData.password;

  const body = formData;
  try {
    const res = await axios.put("/profile", body, config);
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Successfully Updated the profile","success"))
  } catch (err) {
    console.log(err.response);

    dispatch({
      type: USER_ERROR,
    });
  }
};

export const registerProprietaire = (userData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = {
    first_name: userData.full_name.split(' ')[1],
    last_name: userData.full_name.split(' ')[0],
    cin: userData.cin,
    phone: userData.phone,
    email:userData.email
  }

  try{
    const res = await axios.post("/register-new-user", body, config);
    dispatch({
      type: ADD_PROPRIETAIRE,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Successfully added new user","success"))
  } catch(err){

  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await axios.put("/logout");
    dispatch({ type: LOGOUT });
    dispatch(setAlert("Successfully logged out","success"))
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

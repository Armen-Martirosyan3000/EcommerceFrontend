import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, logoutStart } from "./userRedux";
import { publicRequest } from "../requestMethods";


// Register

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};


//Login

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};


//Logout

export const logout = async (dispatch, user) => {
  dispatch(logoutStart());
};


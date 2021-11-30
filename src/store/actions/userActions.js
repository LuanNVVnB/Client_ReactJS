import actionTypes from "./actionTypes";

export const addUserSuccess = () => ({
  type: actionTypes.ADD_USER_SUCCESS,
});
export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});
export const userLoginSuccess = (userInfo) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  userInfo: userInfo,
});

//client
export const addClientSuccess = () => ({
  type: actionTypes.ADD_CLIENT_SUCCESS,
});
export const clientLoginFail = () => ({
  type: actionTypes.CLIENT_LOGIN_FAIL,
});

export const processLogoutClient = () => ({
  type: actionTypes.PROCESS_LOGOUT_CLIENT,
});
export const clientLoginSuccess = (clientInfo) => ({
  type: actionTypes.CLIENT_LOGIN_SUCCESS,
  clientInfo: clientInfo,
});

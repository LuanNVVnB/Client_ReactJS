const actionTypes = Object.freeze({
  //app
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //admin
  // 1. Gender
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_FAIDED: "FETCH_GENDER_FAIDED",
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  //2.RodeId
  FETCH_RODEID_FAIDED: "FETCH_RODEID_FAIDED",
  FETCH_RODEID_START: "FETCH_RODEID_START",
  FETCH_RODEID_SUCCESS: "FETCH_RODEID_SUCCESS",
  //3.PositionID
  FETCH_POSITIONID_START: "FETCH_POSITIONID_START",
  FETCH_POSITIONID_FAIDED: "FETCH_POSITIONID_FAIDED",
  FETCH_POSITIONID_SUCCESS: "FETCH_POSITIONID_SUCCESS",
  //4.create new user
  CREATE_NEW_USER_START: "CREATE_NEW_USER_START",
  CREATE_NEW_USER_SUCCESS: "CREATE_NEW_USER_SUCCESS",
  CREATE_NEW_USER_FAILDED: "CREATE_NEW_USER_FAILDED",
  //5.fetch all user
  FETCH_ALL_USER_START: "FETCH_ALL_USER_START",
  FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
  FETCH_ALL_USER_FAILDED: "FETCH_ALL_USER_FAILDED",
  //6.fetch one user
  FETCH_ONE_USER_START: "FETCH_ONE_USER_START",
  FETCH_ONE_USER_SUCCESS: "FETCH_ONE_USER_SUCCESS",
  FETCH_ONE_USER_FAILDED: "FETCH_ONE_USER_FAILDED",
  //7..delete one user
  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILD: "DELETE_USER_FAILD",
  //8.update one user
  UPDATE_USER_START: "UPDATE_USER_START",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILD: "UPDATE_USER_FAILD",
  //9.fetch All doctor for client
  FETCH_ALL_DOCTOR_START: "FETCH_ALL_DOCTOR_START",
  FETCH_ALL_DOCTOR_SUCCESS: "FETCH_ALL_DOCTOR_SUCCESS",
  FETCH_ALL_DOCTOR_FAILDED: "FETCH_ALL_DOCTOR_FAILDED",
  //10. fetch All doctor for server manage
  ALL_DOCTOR_START: "ALL_DOCTOR_START",
  ALL_DOCTOR_SUCCESS: "ALL_DOCTOR_SUCCESS",
  ALL_DOCTOR_FAILDED: "ALL_DOCTOR_FAILDED",
});

export default actionTypes;

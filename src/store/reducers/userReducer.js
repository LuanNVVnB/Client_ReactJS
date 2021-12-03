import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoginClient: false,
  userInfo: null,
  clientInfo: null,
  bookingAction: false,
  doctorBook: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    //Client
    case actionTypes.CLIENT_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginClient: true,
        clientInfo: action.clientInfo,
      };
    case actionTypes.CLIENT_LOGIN_FAIL:
      return {
        ...state,
        isLoginClient: false,
        clientInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT_CLIENT:
      return {
        ...state,
        isLoginClient: false,
        clientInfo: null,
      };
    case actionTypes.BOOKING_START:
      state.doctorBook = action.doctorBook;
      console.log("doctor Bb: ", action.doctorBook);
      state.bookingAction = true;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default appReducer;

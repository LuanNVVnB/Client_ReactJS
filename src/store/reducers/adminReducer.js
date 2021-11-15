import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roleId: [],
  positionId: [],
  times: [],
  isLoading: false,

  //list user
  users: [],

  //user updated
  userUpdate: [],
  //actions onlick
  autoAction: false,

  doctors: [], //display in client
  Alldoctor: [], //display server
  doctor: [], //doctor is searched
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // 1.actions for Gender
    case actionTypes.FETCH_GENDER_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      //add data to API for state of reducer
      state.genders = action.data.data;
      console.log("action", action.data.data);
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIDED:
      state.isLoading = false;
      return {
        ...state,
      };

    //2. actions for Rode
    case actionTypes.FETCH_RODEID_START:
      state.isLoading = true;
      return {
        ...state,
      };

    case actionTypes.FETCH_RODEID_SUCCESS:
      //add data to API for state of reducer
      state.roleId = action.data.data;
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_RODEID_FAIDED:
      state.isLoading = false;
      return {
        ...state,
      };
    //3. actions for Position
    case actionTypes.FETCH_POSITIONID_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITIONID_SUCCESS:
      //add data to API for state of reducer

      state.positionId = action.data.data;
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITIONID_FAIDED:
      state.isLoading = false;
      return {
        ...state,
      };
    //4.actions for create new user
    case actionTypes.CREATE_NEW_USER_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.CREATE_NEW_USER_SUCCESS:
      //add data to API for state of reducer
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.CREATE_NEW_USER_FAILDED:
      state.isLoading = false;
      return {
        ...state,
      };

    //5.actions for fetch all user

    case actionTypes.FETCH_ALL_USER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      //add data to API for state of reducer

      state.users = action.data.users;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILDED:
      state.users = [];
      return {
        ...state,
      };
    //6. actions for fetch one user
    case actionTypes.FETCH_ONE_USER_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ONE_USER_SUCCESS:
      //add data to API for state of reducer
      state.userUpdate = action.data.users;
      state.autoAction = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ONE_USER_FAILDED:
      state.userUpdate = [];
      return {
        ...state,
      };

    //7.delete user

    case actionTypes.DELETE_USER_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      //add data to API for state of reducer
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.DELETE_USER_FAILD:
      state.isLoading = false;
      return {
        ...state,
      };
    //8.update user
    case actionTypes.UPDATE_USER_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      //add data to API for state of reducer
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.UPDATE_USER_FAILD:
      state.isLoading = false;
      return {
        ...state,
      };
    //9.actions for fetch all doctor

    case actionTypes.FETCH_ALL_DOCTOR_START:
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
      //add data to API for state of reducer

      state.doctors = action.data.doctor;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTOR_FAILDED:
      state.doctors = [];
      return {
        ...state,
      };
    //10 actions for all doctor
    case actionTypes.ALL_DOCTOR_START:
      return {
        ...state,
      };
    case actionTypes.ALL_DOCTOR_SUCCESS:
      //add data to API for state of reducer
      state.Alldoctor = action.data.doctor;
      return {
        ...state,
      };
    case actionTypes.ALL_DOCTOR_FAILDED:
      state.Alldoctor = [];
      return {
        ...state,
      };
    //11. info doctor
    case actionTypes.INFO_DOCTOR_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.INFO_DOCTOR_SUCCESS:
      //add data to API for state of reducer
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.INFO_DOCTOR_FAILED:
      state.isLoading = false;
      return {
        ...state,
      };
    //12. get info doctor
    case actionTypes.FETCH_ONE_DOCTOR_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ONE_DOCTOR_SUCCESS:
      //add data to API for state of reducer
      state.isLoading = false;
      state.doctor = action.data.doctor;
      return {
        ...state,
      };
    case actionTypes.FETCH_ONE_DOCTOR_FAILDED:
      state.isLoading = false;

      return {
        ...state,
      };
    // 1.actions for Time
    case actionTypes.FETCH_TIME_START:
      state.isLoading = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_TIME_SUCCESS:
      //add data to API for state of reducer
      state.times = action.data.data;
      state.isLoading = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_TIME_FAIDED:
      state.isLoading = false;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;

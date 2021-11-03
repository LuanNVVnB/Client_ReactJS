import actionTypes from "./actionTypes";
import {
  getAllcodeService,
  createNewUserService,
  getAlluser,
  deleteUserService,
  updateUserService,
  getAlldoctorService,
} from "../../services/userService";
import { toast } from "react-toastify";
// 1.CREATE ACTION GENDER FOR DOM
export const fetchGenderStart = () => {
  return async (dispatch) => {
    try {
      //dispatch api for reducer
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = await getAllcodeService("GENDER");

      if (res && res.errcode === 0) {
        dispatch(fetchGenderSuccess(res));
      } else {
        dispatch(fetchGenderFaided());
      }
    } catch (e) {
      dispatch(fetchGenderFaided());
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFaided = () => ({
  type: actionTypes.FETCH_GENDER_FAIDED,
});
//2.CREATE ACTION RODEID FOR DOM
export const fetchRodeIdStart = () => {
  return async (dispatch) => {
    try {
      //dispatch api for reducer
      dispatch({ type: actionTypes.FETCH_RODEID_START });
      let res = await getAllcodeService("ROLE");
      if (res && res.errcode === 0) {
        dispatch(fetchRodeIdSuccess(res));
      } else {
        dispatch(fetchRodeIdFaided());
      }
    } catch (e) {
      dispatch(fetchRodeIdFaided());
    }
  };
};
export const fetchRodeIdSuccess = (rodeIdData) => ({
  type: actionTypes.FETCH_RODEID_SUCCESS,
  data: rodeIdData,
});
export const fetchRodeIdFaided = () => ({
  type: actionTypes.FETCH_RODEID_FAIDED,
});

//3.CREATE ACTION POSITION FOR DOM

export const fetchPositionIdStart = () => {
  return async (dispatch) => {
    try {
      //dispatch api for reducer
      dispatch({ type: actionTypes.FETCH_POSITIONID_START });
      let res = await getAllcodeService("POSITION");
      if (res && res.errcode === 0) {
        dispatch(fetchPositionIdSuccess(res));
      } else {
        dispatch(fetchPositionIdFaided());
      }
    } catch (e) {
      dispatch(fetchPositionIdFaided());
    }
  };
};
export const fetchPositionIdSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITIONID_SUCCESS,
  data: positionData,
});
export const fetchPositionIdFaided = () => ({
  type: actionTypes.FETCH_POSITIONID_FAIDED,
});

// 4.CREATE NEW USER
export const createNewUserStart = (data) => {
  return async (dispatch) => {
    try {
      //dispatch api for reducer

      let res = await createNewUserService(data);

      if (res && res.errcode === 0) {
        toast.success("create user success");
        dispatch({ type: actionTypes.CREATE_NEW_USER_START });
        dispatch(createNewUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error(res.message);
      }
    } catch (e) {
      dispatch(createNewUserFaided());
    }
  };
};
export const createNewUserSuccess = () => ({
  type: actionTypes.CREATE_NEW_USER_SUCCESS,
});
export const createNewUserFaided = () => ({
  type: actionTypes.CREATE_NEW_USER_FAILDED,
});

//5.FETCH ALL USER

export const fetchAllUserStart = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.FETCH_ALL_USER_START });
      let res = await getAlluser("All");

      if (res && res.errcode === 0) {
        dispatch(fetchAllUserSuccess(res));
      } else {
        dispatch(fetchAllUserFaided());
      }
    } catch (e) {
      dispatch(fetchAllUserFaided());
    }
  };
};
export const fetchAllUserSuccess = (Alluser) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  data: Alluser,
});
export const fetchAllUserFaided = () => ({
  type: actionTypes.FETCH_ALL_USER_FAILDED,
});
//FETCH ONE USER
export const fetchOneUserStart = (idData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.FETCH_ONE_USER_START });
      let res = await getAlluser(idData);

      if (res && res.errcode === 0) {
        dispatch(fetchOneUserSuccess(res));
      } else {
        dispatch(fetchOneUserFaided());
      }
    } catch (e) {
      dispatch(fetchOneUserFaided());
    }
  };
};
export const fetchOneUserSuccess = (Oneuser) => ({
  type: actionTypes.FETCH_ONE_USER_SUCCESS,
  data: Oneuser,
});
export const fetchOneUserFaided = () => ({
  type: actionTypes.FETCH_ONE_USER_FAILDED,
});

//7.DELETE ONE USRR
export const deleteUserStart = (iddata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.DELETE_USER_START });
      let res = await deleteUserService(iddata);
      if (res && res.deleteuser.errcode === 0) {
        toast.success("delete success");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("delete Faild");
        dispatch(deleteUserFaild());
      }
    } catch (e) {
      dispatch(deleteUserFaild());
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFaild = () => ({
  type: actionTypes.DELETE_USER_FAILD,
});
//8. UPDATE USER
export const updateUserStart = (Data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.UPDATE_USER_START });
      let res = await updateUserService(Data);

      if (res && res.errcode === 0) {
        toast.success("update success");
        dispatch(updateUserSuccess());
        dispatch(fetchAllUserStart());
      } else dispatch(updateUserFaild());
    } catch (e) {
      toast.error("update faild ");
      dispatch(updateUserFaild());
    }
  };
};
export const updateUserSuccess = () => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
});
export const updateUserFaild = () => ({
  type: actionTypes.UPDATE_USER_FAILD,
});
//9. FECTH ALL DOCTOR
export const fetchAllDoctorStart = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.FETCH_ALL_DOCTOR_START });
      let res = await getAlldoctorService(10);

      if (res && res.errcode === 0) {
        dispatch(fetchAllDoctorSuccess(res));
      } else {
        dispatch(fetchAllDoctorFaided());
      }
    } catch (e) {
      dispatch(fetchAllDoctorFaided());
    }
  };
};
export const fetchAllDoctorSuccess = (AllDoctor) => ({
  type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
  data: AllDoctor,
});
export const fetchAllDoctorFaided = () => ({
  type: actionTypes.FETCH_ALL_DOCTOR_FAILDED,
});

import actionTypes from "./actionTypes";
import { getAllcodeService, createNewUserService, getAlluser } from "../../services/userService";
import { toast } from "react-toastify";
// 1.CREATE ACTION GENDER FOR DOM
export const fetchGenderStart = () => {
    return async (dispatch) => {
        try {
            //dispatch api for reducer
            dispatch({ type: actionTypes.FETCH_GENDER_START })
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
            dispatch({ type: actionTypes.FETCH_RODEID_START })
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
            dispatch({ type: actionTypes.FETCH_POSITIONID_START })
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
            dispatch({ type: actionTypes.CREATE_NEW_USER_START })
            let res = await createNewUserService(data);

            if (res && res.errcode === 0) {
                toast.success("heello");

                dispatch(createNewUserSuccess(res));



            } else alert("create new user faild");

        } catch (e) {
            dispatch(createNewUserFaided());

        }
    };
};
export const createNewUserSuccess = (newUser) => ({
    type: actionTypes.CREATE_NEW_USER_SUCCESS,
    data: newUser
})
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
    }
}
export const fetchAllUserSuccess = (Alluser) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    data: Alluser
})
export const fetchAllUserFaided = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILDED,
});


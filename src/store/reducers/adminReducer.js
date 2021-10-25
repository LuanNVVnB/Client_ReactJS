import actionTypes from '../actions/actionTypes';



const initialState = {
    genders: [],
    roleId: [],
    positionId: [],
    users: [],
    isLoading: false
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        // 1.actions for Gender
        case actionTypes.FETCH_GENDER_START:
            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //add data to API for state of reducer
            state.genders = action.data.data;
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAIDED:
            state.isLoading = false;
            return {
                ...state,
            }

        //2. actions for Rode   
        case actionTypes.FETCH_RODEID_START:

            state.isLoading = true;
            return {
                ...state
            }

        case actionTypes.FETCH_RODEID_SUCCESS:
            //add data to API for state of reducer
            state.roleId = action.data.data;
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.FETCH_RODEID_FAIDED:
            state.isLoading = false;
            return {
                ...state,
            }
        //3. actions for Position
        case actionTypes.FETCH_POSITIONID_START:
            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITIONID_SUCCESS:
            //add data to API for state of reducer


            state.positionId = action.data.data;
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.FETCH_POSITIONID_FAIDED:
            state.isLoading = false;
            return {
                ...state,
            }
        //4.actions for create new user
        case actionTypes.CREATE_NEW_USER_START:

            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.CREATE_NEW_USER_SUCCESS:
            //add data to API for state of reducer
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.CREATE_NEW_USER_FAILDED:
            state.isLoading = false;
            return {
                ...state,
            }

        //5.actions for fetch all user

        case actionTypes.FETCH_ALL_USER_START:
            state.isLoading = true;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            //add data to API for state of reducer
            state.users = action.data.users;
            state.isLoading = false;
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USER_FAILDED:
            state.isLoading = false;
            return {
                ...state,
            }

        default:
            return state;
    }

}

export default adminReducer;
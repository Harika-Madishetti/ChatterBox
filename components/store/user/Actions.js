import * as types from './ActionTypes';

export const registerUser = userInformation => {
    return(dispatch) => {
        let userInfo = {
            phoneNo : userInformation.phoneNumber,
        };
        dispatch(saveUserInfoInStore(userInfo))
    }
};

const saveUserInfoInStore = userInformation => ({
    type: types.SAVE_USER_PHONE_NUMBER_IN_STORE,
    userInformation
})
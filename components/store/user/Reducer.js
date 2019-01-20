import * as types from './ActionTypes';

const initialState = {
    localContats : null,
    user:null,
    isRegistered:false,
    firebaseContacts: null,
    errorLoadingContacts: false,
    currentChatUser: null,
};

const user = (state = initialState,action) => {
    switch(action.type) {
        case types.SAVE_USER_PHONE_NUMBER_IN_STORE:
            return{...state,user:userInformation,isRegistered:true}
        default:
            return state
    }
}
export default user
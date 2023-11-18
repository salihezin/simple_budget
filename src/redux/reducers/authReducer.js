import {LOGIN_ERROR, RESET_USER, SET_USER} from '../constants'

const initialState = {
    isLoggedIn: false,
    user: null,
    userId: null,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            console.log('payload', payload);
            state = {
                isLoggedIn: true,
                user: payload.email,
                userId: payload.uid,
                loginError: null,
            };
            return state;
        case RESET_USER:
            state = initialState;
            return state;
        case LOGIN_ERROR:
            state = {
                isLoggedIn: false,
                user: null,
                userId: null,
                loginError: payload,
            };
            return state;
        default:
            return state;
    }
};
export default authReducer;

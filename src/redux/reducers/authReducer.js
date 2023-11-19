import {LOGGING_IN, LOGIN_ERROR, RESET_USER, SET_USER} from '../constants'

const initialState = {
    isLoggedIn: false,
    user: null,
    userId: null,
    userLoggingIn: false,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            console.log('payload', payload);
            state = {
                isLoggedIn: true,
                user: payload.email,
                userId: payload.uid,
                username: payload.displayName,
                userLoggingIn: false,
                loginError: null,
            };
            return state;
        case LOGGING_IN:
            state = {
                isLoggedIn: false,
                user: null,
                userId: null,
                username: null,
                userLoggingIn: true,
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
                username: null,
                userLoggingIn: false,
                loginError: payload,
            };
            return state;
        default:
            return state;
    }
};
export default authReducer;

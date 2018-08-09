import { userConstants } from '../constants/user.constants.js';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function signup(state = initialState, action) {
    switch (action.type) {
        case userConstants.SIGNUP_REQUEST:
            return {
                singup: true,
                user: action.user
            };
        case userConstants.SIGNUP_SUCCESS:
            return {
                singup: true,
                user: action.user
            };
        case userConstants.SIGNUP_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
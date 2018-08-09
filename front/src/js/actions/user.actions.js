import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import axios from 'axios';
import { history } from '../helpers/history';
let apiBaseUrl = "http://127.0.0.1:3000";

export const userActions = {
    login,
    logout,
    signup
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        console.log("values", email, password);
        //To be done:check for empty values before hitting submit
        var self = this;
        var payload = {
            "email": email,
            "password": password,
        }
        axios.post(apiBaseUrl + '/login', payload)
            .then(
                result => {
                    let user = {
                        user: result.data.user,
                        token: result.data.token
                    }
                    console.log(user);
                    if (result.data.code == 200) {
                        console.log("Login successfull");
                        dispatch(success(user));
                        localStorage.setItem('user', JSON.stringify(user));
                        history.push('/home');
                    }
                    else if (result.data.code == 204) {
                        console.log("Username password do not match");
                        alert("username password do not match");
                        dispatch(failure("username password do not match"));
                    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exist");
                        dispatch(failure("username password do not match"));
                    }
                },
                error => {
                    console.log(error);
                    dispatch(failure(error));
                })
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    localStorage.removeItem('user');
    history.push('/');
    //userService.logout();
    return { type: userConstants.LOGOUT };
}
function signup(payload) {
    return dispatch => {
        dispatch(request({ payload }));
        //To be done:check for empty values before hitting submit
        var self = this;
        axios.post(apiBaseUrl + '/register', payload)
            .then(function (response) {
                console.log(response);
                result => {
                    let user = {
                        user: result.data.user,
                        token: result.data.token
                    }
                    if (response.data.code == 200) {
                        console.log("registration successfull");
                        dispatch(success(user));
                        localStorage.setItem('user', JSON.stringify(user));
                        history.push('/home');
                    }
                    else
                        dispatch(failure("username password do not match"));

                },
                    error => {
                        console.log(error);
                        dispatch(failure(error));
                    }
            })
        function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
        function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
        function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
    }
}
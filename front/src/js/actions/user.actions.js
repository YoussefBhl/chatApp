import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import axios from 'axios';
import { history } from '../helpers/history';
let apiBaseUrl = "http://127.0.0.1:3000";

export const userActions = {
    login,
    logout,
    getAll
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
                user => {
                console.log(user);
                if (user.data.code == 200) {
                    console.log("Login successfull");
                    dispatch(success(user));
                    history.push('/home');
                    //console.log(history)
                    //var uploadScreen = [];
                    //uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
                    //self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
                }
                else if (user.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match");
                    dispatch(failure(error));
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                    dispatch(failure(error));
                }
            }, 
        error =>{
            console.log(error);
            dispatch(failure(error));
        })
            /*.catch(function (error) {
                console.log(error);
                dispatch(failure(error));
            });
       /* userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/home');
                    console.log(history)
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );*/
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
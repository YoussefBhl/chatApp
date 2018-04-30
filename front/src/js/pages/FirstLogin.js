import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Footer from '../components/layout/Footer.js'
import LoginRect from '../components/layout/LoginRect.js'
import Welcome from '../components/layout/Welcome.js'

import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
 
import { userActions } from '../actions/user.actions';

class FirstLoginComponent extends React.Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }
 
render() {
    console.log(this.props)
    return (
      <div className="col-md-6 col-md-offset-3">
                <h1>Hi {this.props.user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                <p>
                    <Link to="/login"><RaisedButton fullWidth={true} label="Login" primary={true} onClick={(event) => this.handleSubmit(event)}/></Link>
                </p>
            </div>
    );
  }
}
function mapStateToProps(state) {
    const {  authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}
 
const FirstLogin = withRouter(connect(mapStateToProps)(FirstLoginComponent));
export  default FirstLogin ;



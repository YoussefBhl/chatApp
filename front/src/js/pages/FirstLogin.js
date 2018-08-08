import React from "react";

import { Button, Input, Icon } from 'semantic-ui-react';
import Footer from '../components/layout/Footer.js'
import Welcome from '../components/layout/Welcome.js'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';

class FirstLoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    render() {
        console.log("this is home")
        console.log(this.props)
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {this.props.user.user.firstName}!</h1>
                <h1>Hi {this.props.user.user.lastName}!</h1>
                <h1>Hi {this.props.user.user.sex}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                    <Button  primary onClick={(event) => this.handleSubmit(event)} >Logout</Button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const FirstLogin = withRouter(connect(mapStateToProps)(FirstLoginComponent));
export default FirstLogin;



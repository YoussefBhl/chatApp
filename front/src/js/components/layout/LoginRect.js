import React from "react";
import { Button, Input, Icon } from 'semantic-ui-react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
     handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        const { dispatch } = this.props;
        console.log(email, password)
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
  render() {
      const style = {
        rightContainer: {
            backgroundColor:"white",
            border: "2px solid",
            borderRadius: "25px",
            padding: "5%",
        },
        registerColor: {
          backgroundColor: "4c639"
        }
      };
      const { username, password } = this.state;
    return (
        <div style={style.rightContainer}>
            <h1> Welcome To Chat App </h1>
            <br />
           <Input
             placeholder="Email" value={username} name="email" size='huge'
             iconPosition='left' fluid
             onChange = {this.handleChange}
             >
             <Icon name='at' />
               <input />
               </Input>
             <Input
               type="password" size='huge' fluid iconPosition='left'
               placeholder="Password" value={password} name="password"
               onChange = {this.handleChange}
               >
               <Icon name='lock' />
               <input />
               </Input>
             <br/><br/>
             <Link to="/home"><Button primary fluid size='massive' onClick={(event) => this.handleSubmit(event)} > Login </Button>
             </Link>
             <Link to="/register"><Button fluid size='massive' > Register </Button> </Link>
        </div>
    );
  }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
const LoginRect = withRouter(connect(mapStateToProps)(LoginPage));
export default LoginRect;
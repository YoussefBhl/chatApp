import React from "react";
import { Button, Input, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../../actions/user.actions';
class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      submitted: false
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
        this.setState({submitted:true});
        const { email, password } = this.state;
        const { dispatch } = this.props;
        //password length temporary >0
        if (email && password.length>0) {
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
      const { email, password, submitted } = this.state;
    return (
        <div style={style.rightContainer}>
            <h1> Welcome To Chat App </h1>
            <br />
           <Input
             placeholder="Email" value={email} name="email" size='huge' error={submitted && (!email.includes('@') || email.length<3)  ? true: false}
             iconPosition='left' fluid action={true}  type="email" actionPosition='left'
             onChange = {this.handleChange}>
             <Icon name='at' />
               <input />
               </Input>
             <Input
               type="password" size='huge' fluid iconPosition='left'  action={true}
               placeholder="Password" value={password} name="password"  error={submitted &&  password.length<7  ? true: false}
               onChange = {this.handleChange}>
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
const LoginRect = connect(mapStateToProps)(LoginPage);
export default LoginRect;
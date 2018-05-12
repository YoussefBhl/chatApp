import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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
    handleClick(event){
      var apiBaseUrl = "http://127.0.0.1:3000";
      console.log("values",this.state.email,this.state.password);
      //To be done:check for empty values before hitting submit
      var self = this;
      var payload={
      "email": this.state.email,
      "password": this.state.password,
      }
      axios.post(apiBaseUrl+'/login', payload)
      .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
          console.log("Login successfull");
          var uploadScreen=[];
          uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
          }
        else if(response.data.code == 204){
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else{
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
      const style = {
        rightContainer: {
            float:'right',
            backgroundColor:"white",
            border: "2px solid",
            borderRadius: "25px",
            padding: "5%",
            width: "40%",
            heigth: "60%",
        },
        registerColor: {
          backgroundColor: "4c639"
        }
      };
      const { username, password } = this.state;
    return (
        <div style={style.rightContainer}>
            <h1> Welcome To Chat App </h1>
           <TextField
             floatingLabelText="email" value={username} name="email"
             onChange = {this.handleChange}
             />
           <br/>
             <TextField
               type="password"
               floatingLabelText="Password" value={password} name="password"
               onChange = {this.handleChange}
               />
             <br/><br/>
             <Link to="/home"><RaisedButton fullWidth={true} label="Login" primary={true} onClick={(event) => this.handleSubmit(event)}/></Link>
               <br/><br/>
             <Link to="/register"><RaisedButton backgroundColor="#a4c639"  fullWidth={true} label="Register"/></Link>
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
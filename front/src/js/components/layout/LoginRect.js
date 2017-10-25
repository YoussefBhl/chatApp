import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from "react-router";
export default class LoginRect extends React.Component {
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
    return (
        <div style={style.rightContainer}>
            <h1> Welcome To Chat App </h1>
           <TextField
             floatingLabelText="email"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/><br/>
             <RaisedButton fullWidth={true} label="Login" primary={true} onClick={(event) => this.handleClick(event)}/>
               <br/><br/>
             <Link to="register"><RaisedButton backgroundColor="#a4c639"  fullWidth={true} label="Register"/></Link>
        </div>
    );
  }
}
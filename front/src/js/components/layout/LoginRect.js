import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginRect extends React.Component {
  render() {
      const style = {
        rightContainer:{
            float:'right',
            backgroundColor:"white",
            border: "2px solid",
            borderRadius: "25px",
            padding: "5%",
            width: "40%",
            heigth: "60%",
        },
      };
    return (
        <div style={style.rightContainer}>
            <h1> Welcome To Chat App </h1>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
        </div>
    );
  }
}
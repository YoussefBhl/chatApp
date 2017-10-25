import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from "react-router";
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class RegisterRect extends React.Component {
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
        },
        name: {
          float: "left",
          width: "40%",
          display: "inline"
        },
        lastName: {
          float: "right",
          width: "40%",
          display: "inline"
        },
        radioButton: {
          marginBottom: 16,
        },
      };
    return (
        <div style={style.rightContainer}>
            <TextField floatingLabelText="First name" style={style.name}
            onChange = {(event,newValue) => this.setState({username:newValue})}/>

            <TextField floatingLabelText="Last name" style={style.lastName}
            onChange = {(event,newValue) => this.setState({username:newValue})} />

              <TextField type="password" floatingLabelText="Password" 
              onChange = {(event,newValue) => this.setState({password:newValue})} />

              <DatePicker hintText="Birthday" container="inline" mode="landscape" />

              <RadioButtonGroup name="sex">

              <RadioButton value="male" label="Male" style={style.radioButton} />
              <RadioButton value="female" label="Female" style={style.radioButton} />

              </RadioButtonGroup>
               <br/><br/>
             <Link to="home"><RaisedButton backgroundColor="#a4c639"  fullWidth={true} label="Create account"/></Link>
              <br/><br/>
             <Link to="login"><RaisedButton fullWidth={true} label="Login" primary={true} /></Link>
        </div>
    );
  }
}
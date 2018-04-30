import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from "react-router-dom";
import DatePicker from 'material-ui/DatePicker';
import axios from 'axios';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class RegisterRect extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      birthday: '',
      sex: ''
    }
  }
  handleClick(event){
    var apiBaseUrl = "http://127.0.0.1:3000";
    console.log("values",this.state.firstName,this.state.lastName,this.state.email,this.state.password,this.state.birthday,this.state.sex);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "firstName": this.state.firstName,
    "lastName": this.state.lastName,
    "email": this.state.email,
    "password": this.state.password,
    "birthdate": this.state.birthdate,
    "sex": this.state.sex,
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      console.log("registration successfull");
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
          <h2>Sign Up</h2>
            <TextField floatingLabelText="First name" style={style.name}
            onChange = {(event,newValue) => this.setState({firstName:newValue})}/>

            <TextField floatingLabelText="Last name" style={style.lastName}
            onChange = {(event,newValue) => this.setState({lastName:newValue})} />

            <TextField type="email" floatingLabelText="email" 
              onChange = {(event,newValue) => this.setState({email:newValue})} />   

            <TextField type="password" floatingLabelText="Password" 
              onChange = {(event,newValue) => this.setState({password:newValue})} />
              <input type="date" onChange = {(event) => this.setState({birthdate:event.target.value})} />

            <RadioButtonGroup name="sex" onChange = {(event,newValue) => this.setState({sex:newValue})}>
            <RadioButton value="male" label="Male" style={style.radioButton} />

            <RadioButton value="female" label="Female" style={style.radioButton} />

              </RadioButtonGroup>
               <br/><br/>
             <RaisedButton backgroundColor="#a4c639"  fullWidth={true} label="Create account" 
             onClick={(event) => this.handleClick(event)} />
              <br/><br/>
             <Link to="/"><RaisedButton fullWidth={true} label="Login" primary={true} /></Link>
        </div>
    );
  }
}
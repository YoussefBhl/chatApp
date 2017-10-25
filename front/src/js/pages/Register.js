import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Footer from '../components/layout/Footer.js'
import RegisterRect from '../components/layout/RegisterRect.js'
export default class Register extends React.Component {

 
render() {
    return (
      <div>
          <RegisterRect />   
      </div>
    );
  }
}

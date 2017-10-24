import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Footer from '../components/layout/Footer.js'
import LoginRect from '../components/layout/LoginRect.js'
import Welcome from '../components/layout/Welcome.js'
document.body.style.backgroundColor = "#2f4050";
export default class Login extends React.Component {
    
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  style: {
    mainContainer: {
        margin: "0 auto",
        backgroundColor:"#2f4050",
        padding: "5%",
        //paddingRight: "10%"
    },

    }
  }
 }
 
render() {
    return (
      <div>
        <MuiThemeProvider>
            <div style={this.state.style.mainContainer}>    
            <Welcome />
            <LoginRect />   
         <Footer />
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};

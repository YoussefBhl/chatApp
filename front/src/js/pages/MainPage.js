import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Transition } from 'react-transition-group'
import NavBar from '../components/layout/NavBar.js'
export default class MainPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {open: false,st:{}};

  }
  

  handleToggle = () => {
      this.setState({open: !this.state.open});
      if(this.state.open)
          this.setState({st: {transform: 'translateX(0px)',width: "100%"}});
    else
        this.setState({st: {transform: 'translateX(17%)',width: "85%"}});
      };

  render() {
    return (
       <MuiThemeProvider>
       <NavBar />
       </MuiThemeProvider>
    );
  }
}
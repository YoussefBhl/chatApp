import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Transition } from 'react-transition-group'
export default class NavBar extends React.Component {
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
           <div>
           <AppBar title="Title" onLeftIconButtonTouchTap={this.handleToggle} style={this.state.st}>
        
            </AppBar>
            <Drawer open={this.state.open} width="15%">
          <MenuItem  leftIcon={<IconButton onClick={this.handleToggle}>
              <NavigationClose /></IconButton>}>Menu</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
            </div>
    );
  }
}
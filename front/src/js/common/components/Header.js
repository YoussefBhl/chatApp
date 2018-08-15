import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, MenuItem, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLogout = (e) => {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
  }
  render() {
    const { activeItem } = this.state
    const style = {
      navBar: {
        borderRadius: '0px'
      },
      dropdownText: {
        color: '#586069',
        display: 'block',
        padding: '3px 20px',
        clear: 'both',
        fontWeight: '400',
        margin: '0'
      },
      currentUserStrong: {
        fontWeight: '600'
      }
    }
    const img = <Glyphicon glyph='user' width={25} height={25} />
    const user = this.props.user.user;
    return (
      <Navbar inverse fluid collapseOnSelect style={style.navBar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">ChatApp</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Friends</NavItem>
            <NavItem eventKey={3} href="#">messages</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={4} title={img} id="basic-nav-dropdown">
              <p style={style.dropdownText} >Signed in as</p>
              <p style={{...style.dropdownText, ...style.currentUserStrong}} >{user.firstName}</p>
              <MenuItem divider />
              <MenuItem eventKey={4.1}>Profile</MenuItem>
              <MenuItem eventKey={4.2}>Settings</MenuItem>
              <MenuItem eventKey={4.3}>Help</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3} onClick={(event) => this.handleLogout(event)}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

Header = connect(mapStateToProps)(Header)
export default Header;

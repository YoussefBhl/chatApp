import React from "react";
import { Navbar, NavDropdown, MenuItem, Nav, FormGroup, FormControl, NavItem, Button } from 'react-bootstrap';
export default class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const options = [
      {
        key: 'today',
        text: 'today',
        value: 'today',
        content: 'Today',
      },
      {
        key: 'this week',
        text: 'this week',
        value: 'this week',
        content: 'This Week',
      },
      {
        key: 'this month',
        text: 'this month',
        value: 'this month',
        content: 'This Month',
      },
    ]
    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="home">ChatApp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
      </NavItem>
            <NavItem eventKey={2} href="#">
              Friends
      </NavItem>
            <NavItem eventKey={3} href="#">
              messages
      </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

import React from "react";
import { Menu, Segment, Input, Image, Dropdown, Header } from 'semantic-ui-react'

export default class Navbar extends React.Component {
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
      <div style={{ backgroundColor: '#2f4050' }}>
        <Menu pointing secondary color='violet'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Header >
            <Image size='small' wrapped src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Header.Content>
              <Dropdown inline options={options} />
              </Header.Content>
            </Header>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

import React from "react";
import { Button, Input, Checkbox, Form, Grid, Icon } from 'semantic-ui-react'

import { Link } from "react-router-dom";

import axios from 'axios';


export default class RegisterRect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthday: '',
      sex: ''
    }
  }
  handleChangeRadio = (e, newValue) => this.setState({ sex: newValue.value });
  handleClick(event) {
    var apiBaseUrl = "http://127.0.0.1:3000";
    //To be done:check for empty values before hitting submit
    var self = this;

    var payload = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "password": this.state.password,
      "birthdate": this.state.birthdate,
      "sex": this.state.sex,
    }
    axios.post(apiBaseUrl + '/register', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
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
        backgroundColor: "white",
        border: "2px solid",
        borderRadius: "25px",
        padding: "5%",
      }
    };
    return (
      <div style={style.rightContainer}>
        <Grid centered>
          <Grid.Row centered>
            <h2>Sign Up</h2>

          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Input placeholder="First name" size="large" fluid iconPosition='left'
                onChange={(event, newValue) => this.setState({ firstName: newValue.value })} >
                <Icon name='user circle' />
                <input />
              </Input>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input placeholder="Last name" size="large" fluid iconPosition='left'
                onChange={(event, newValue) => this.setState({ lastName: newValue.value })} >

                <Icon name='user circle' />
                <input />
              </Input>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Input type="email" placeholder="email" size="large" fluid iconPosition='left'
                onChange={(event, newValue) => this.setState({ email: newValue.value })} >

                <Icon name='at' />
                <input />
              </Input>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input type="password" placeholder="Password" size="large" fluid iconPosition='left'
                onChange={(event, newValue) => this.setState({ password: newValue.value })}>

                <Icon name='lock' />
                <input />
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
          <Grid.Column width={4}>
          <h5> Birthdate: </h5>
          </Grid.Column>
          <Grid.Column width={8}>
            <input type="date" onChange={(event) => this.setState({ birthdate: event.target.value })} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Form>
              <Form.Field>
                Select gender:
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='Male'
                  name='radioGroup'
                  value='male'
                  checked={this.state.sex === 'male'}
                  onChange={this.handleChangeRadio}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='Female'
                  name='radioGroup'
                  value='female'
                  checked={this.state.sex === 'female'}
                  onChange={this.handleChangeRadio}
                />
              </Form.Field>
            </Form>
          </Grid.Row>
        </Grid>
        <br /><br />
        <Button fluid primary
          onClick={(event) => this.handleClick(event)} fluid size='massive'> Create account</Button>
        <Link to="/"><Button fluid size='massive'>Login</Button>
        </Link>

      </div>
    );
  }
}
import React from "react";
import { Button, Input, Radio, Form } from 'semantic-ui-react'

import { Link } from "react-router-dom";

import axios from 'axios';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


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
  handleClick(event) {
    var apiBaseUrl = "http://127.0.0.1:3000";
    console.log("values", this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.birthday, this.state.sex);
    //To be done:check for empty values before hitting submit
    var self = this;
    handleChangeRadio = (event, newValue) => this.setState({ sex: newValue });
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
        float: 'right',
        backgroundColor: "white",
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
        <Input placeholder="First name" style={style.name}
          onChange={(event, newValue) => this.setState({ firstName: newValue })} />

        <Input placeholder="Last name" style={style.lastName}
          onChange={(event, newValue) => this.setState({ lastName: newValue })} />

        <Input type="email" placeholder="email"
          onChange={(event, newValue) => this.setState({ email: newValue })} />

        <Input type="password" placeholder="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })} />
        <input type="date" onChange={(event) => this.setState({ birthdate: event.target.value })} />
        <Form>
        <Form.Field>
          <Radio
            label='Male'
            name='radioGroup'
            value='male'
            checked={this.state.sex === 'male'}
            onChange={this.handleChangeRadio}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Female'
            name='radioGroup'
            value='female'
            checked={this.state.value === 'female'}
            onChange={this.handleChangeRadio}
          />
        </Form.Field>
        </Form>
        <br /><br />
        <Button  fluid
          onClick={(event) => this.handleClick(event)} fluid size='massive'> Create account</Button>
        <Link to="/"><Button primary={true} fluid size='massive'>Login</Button>
        </Link>
      </div>
    );
  }
}
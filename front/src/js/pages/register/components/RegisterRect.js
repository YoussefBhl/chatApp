import React from "react";
import { Button, Grid, Row, Col, Glyphicon, Radio, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { userActions } from '../../../actions/user.actions';

let apiBaseUrl = "http://127.0.0.1:3000";

class RegisterRect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthday: '',
      sex: '',
      submitted: false,
      showError: false
    }
  }
  handleChangeRadio = (e) => this.setState({ sex: e.target.value });
  handleClick(event) {
    this.setState({ submitted: true });
    this.setState({ showError: false });
    //To be done:check for empty values before hitting submit
    if (this.state.firstName && this.state.lastName && this.state.email.includes('@') && this.state.email.length > 2
      && this.state.password.length > 6 && this.state.birthdate && this.state.sex) {
      let payload = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.email,
        "password": this.state.password,
        "birthdate": this.state.birthdate,
        "sex": this.state.sex,
      }
      console.log(payload)
      const { dispatch } = this.props;
      dispatch(userActions.signup(payload));
    }
    else {
      this.setState({ showError: true });
    }
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
    const { firstName, password, lastName, submitted, email, birthdate, sex, showError } = this.state;
    return (
      <div style={style.rightContainer}>
        <Grid>
          <Row>
            <Col md={2} mdOffset={2}>
              <h2>Sign Up</h2>
            </Col>
          </Row>
          <Row>
            <br />
            <Col md={3}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph='user' /></InputGroup.Addon>
                <FormControl type="text" placeholder="First name" 
                  onChange={(e) => (this.setState({ firstName: e.target.value }))} />
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph='user' /></InputGroup.Addon>
                <FormControl type="text" placeholder="Last name" 
                  onChange={(e) => this.setState({ lastName: e.target.value })} />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={3}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph='envelope' /></InputGroup.Addon>
                <FormControl type="email" placeholder="email" 
                  onChange={(e) => this.setState({ email: e.target.value })} />
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph='lock' /></InputGroup.Addon>
                <FormControl type="password" placeholder="Password" 
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={3} mdOffset={1}>
              <InputGroup>
                <InputGroup.Addon>Birthdate</InputGroup.Addon>
                <FormControl type="date" onChange={(event) => this.setState({ birthdate: event.target.value })} />
              </InputGroup>
              {(submitted && !birthdate) ? (<p>False Birthdate</p>) : (null)}
            </Col>
          </Row>
          <br />
          <Row>
            <form >
              Select gender:
                <FormGroup>
                <Radio name='radioGroup' value="male"
                  onChange={this.handleChangeRadio}>Male</Radio>
                <Radio
                  name='radioGroup' value="female"
                  onChange={this.handleChangeRadio}>Female</Radio>
              </FormGroup>
            </form>
          </Row>
        </Grid>
        <br /><br />
        {(showError) ? (<p>check input please </p>) : (null)}
        <Button bsStyle="primary" block bsSize="large"
          onClick={(event) => this.handleClick(event)}>Create account</Button>
        <Link to="/"><Button block bsSize="large">Login</Button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { signup } = state.signup;
  return {
    signup
  };
}
RegisterRect = connect(mapStateToProps)(RegisterRect);
export default RegisterRect; 

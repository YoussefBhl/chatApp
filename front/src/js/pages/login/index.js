import React from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../../common/components/Footer';
import LoginRect from './components/LoginRect';
import Welcome from '../../common/components/Welcome';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount(){
    document.body.style.backgroundColor = "#2f4050";
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Welcome />
          </Col>
          <Col md={6}>
            <LoginRect />
          </Col>
        </Row>
        <Row>
          <Footer />
          </Row>
      </Grid>
    );
  }
}
const style = {
  margin: 15,
};

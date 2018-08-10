import React from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../../common/components/Footer'
import RegisterRect from './components/RegisterRect'
import Welcome from '../../common/components/Welcome.js'

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={5}>
              <Welcome />
            </Col>
            <Col md={7}>
              <RegisterRect />
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Grid>
      </div>
    );
  }
}

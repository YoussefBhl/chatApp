import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
const Footer = (props) => {
  const style = {
    rightP: {
      float: 'right'
    },
    leftP: {
      float: 'left'
    }
  };
  return (
    <footer>
      <Grid>
        <Row>
        <hr />
          <Col md={6}>
            <p style={style.leftP}>Copyright &copy; ChatApp</p>
          </Col>
          <Col md={6}>
            <p style={style.rightP}>2017-2018</p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;

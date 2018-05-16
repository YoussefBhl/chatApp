import React from "react";
import { Grid } from 'semantic-ui-react'
import Footer from '../components/layout/Footer.js'
import RegisterRect from '../components/layout/RegisterRect.js'
import Welcome from '../components/layout/Welcome.js'
export default class Register extends React.Component {


  render() {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Welcome />
            </Grid.Column>
            <Grid.Column width={7}>
              <RegisterRect />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Footer />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

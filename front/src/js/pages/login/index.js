import React from "react";
import { Grid } from 'semantic-ui-react/dist/commonjs'
import Footer from '../../common/components/Footer'
import LoginRect from './components/LoginRect'
import Welcome from '../../common/components/Welcome'
document.body.style.backgroundColor = "#2f4050";
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row centered>
          <Grid.Column width={8}>
            <Welcome />
          </Grid.Column>
          <Grid.Column width={7}>
            <LoginRect />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Footer />
          </Grid.Row>
      </Grid>
    );
  }
}
const style = {
  margin: 15,
};
import React from "react";
import { Grid, Image, Divider } from 'semantic-ui-react'

export default class Footer extends React.Component {
  render() {
    const style = {
    rightP:{
      float: 'right'
    },
    leftP:{
      float: 'left'
    }
  };
    return (
      <footer>
        <Divider clearing />
        <Grid container columns={2}>
        
          
          <Grid.Column>
          
            <p style={style.leftP}>Copyright &copy; ChatApp</p>
            </Grid.Column>
            <Grid.Column >
            
            <p style={style.rightP}>2017-2018</p>
            </Grid.Column>
        </Grid>
      </footer>
    );
  }
}
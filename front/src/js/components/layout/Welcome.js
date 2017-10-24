import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Welecome extends React.Component {
  render() {
      const style = {
           leftContainer: {
                float:'left',
                color: "white"
        },
            whiteFont: {
                color: 'white'
            }
      };
    return (
        <div style={style.leftContainer}>
                    <h1 style={style.whiteFont}> Welcome to App Chat</h1>
                    <h4 style={style.whiteFont}>It's a simple web chat application: </h4>
                    <h4 style={style.whiteFont}>The user would create an account and start a new chat exprience.</h4>
                    <h4 style={style.whiteFont}>This aim of this project is to learn new technologies: React, Node and Cypher.</h4>
                </div>
    );
  }
}
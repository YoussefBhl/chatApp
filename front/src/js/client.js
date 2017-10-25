import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"
import Register from "./pages/Register"
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="register"  component={Register}></Route>
    </Route>
  </Router>,
app);
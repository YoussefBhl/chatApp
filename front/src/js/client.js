import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Login}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="Login(/:articale)" component={Login}></Route>
      <Route path="settings"  component={Login}></Route>
    </Route>
  </Router>,
app);
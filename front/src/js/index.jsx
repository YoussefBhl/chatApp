import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from "./store.js"
import Login from "./pages/Login";
import MainPage from "./pages/MainPage"
import Register from "./pages/Register"

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend.js';
configureFakeBackend();

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Route path="/" component={MainPage}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="register"  component={Register}></Route>
    </Route>
    </Router>
    </Provider>,
app);
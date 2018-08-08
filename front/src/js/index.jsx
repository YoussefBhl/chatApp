import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { store } from "./store.js"
import { connect } from 'react-redux';
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./pages/MainPage"
import Register from "./pages/register"
import FirstLogin from "./pages/FirstLogin"
import Footer from './components/layout/Footer.js'
import { history } from './helpers/history';
// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

const app = document.getElementById('app');

class App extends React.Component {

  render() {
    return (
        <div>
          <div>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute path="/home" component={FirstLogin} />
            <Route path="/register" component={Register}></Route>
          </div>
        </div>
    )
  }

}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, app);
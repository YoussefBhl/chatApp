import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from "./store.js"
import { connect } from 'react-redux';
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./pages/MainPage"
import Register from "./pages/Register"
import FirstLogin from "./pages/FirstLogin"
import Footer from './components/layout/Footer.js'
import Welcome from './components/layout/Welcome.js'
import LoginRect from './components/layout/LoginRect.js'
import { history } from './helpers/history';

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

const app = document.getElementById('app');

class App extends React.Component {

  render() {
    return (

        <div>
          <Welcome />
        
          <div>
            <Route exact path="/" component={LoginRect}></Route>

            <PrivateRoute path="/home" component={FirstLogin} />

            <Route path="/register" component={Register}></Route>
          </div>


          <Footer />
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
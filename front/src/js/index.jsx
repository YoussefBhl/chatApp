import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store.js"
import Login from "./pages/login";
import PrivateRoute from "./common/components/PrivateRoute";
import Register from "./pages/register"
import Home from "./pages/home"
import { history } from './helpers/history';

const app = document.getElementById('app');

class App extends React.Component {

  render() {
    return (
        <div>
          <div>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute path="/home" component={Home} />
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
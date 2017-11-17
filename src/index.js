import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
import { Login, Register, Error_400, Error_500 } from './views/Pages/index'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/login" name="login" component={Login} />
      <Route path="/register" name="register" component={Register} />
      <Route path="/error_400" name="400" component={Error_400} />
      <Route path="/error_500" name="500" component={Error_500} />
      <Route path="/" name="Home" component={Full} />
    </Switch>
  </HashRouter>
), document.getElementById('root'));

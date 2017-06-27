import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './login/login-page';
import RegisterPage from './register/register-page'

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/cadastro" component={RegisterPage} />
    </Switch>
  );
}

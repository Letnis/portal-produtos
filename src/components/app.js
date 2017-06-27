import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login/login';
import LoginTitle from './login/login-title';

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={LoginTitle} />
    </Switch>
  );
}

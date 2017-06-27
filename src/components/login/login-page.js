import React, { Component } from 'react';

import LoginTitle from './login-title';
import LoginForm from './login-form';

export default (props) => {
  return (
    <section className="hero is-info is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <LoginTitle />
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

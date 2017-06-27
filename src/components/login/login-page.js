import React, { Component } from 'react';

import LoginTitle from './login-title';
import LoginForm from './login-form';

export default (props) => {
  return (
    <section className="hero is-info is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <LoginTitle />
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

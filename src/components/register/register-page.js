import React, { Component } from 'react';

import Title from '../title';
import RegisterForm from './register-form';

export default (props) => {
  return (
    <section className="section is-info is-bold is-fullheight">
      <div className="container">
        <Title text="Nova Conta" />
        <RegisterForm />
      </div>
    </section>
  );
}

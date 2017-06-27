import React, { Component } from 'react';

import FormInput from '../form-input';
import MainButton from '../main-button';

export default (props) => {
  return (
    <form className="register-form" method="post">
      <div className="columns">
        <div className="column is-6">
          <FormInput id="txt-name" label="Nome" type="text" placeholder="Digite seu nome" required />
        </div>
        <div className="column is-6">
          <FormInput id="txt-email" label="Email" type="text" placeholder="Digite seu email" required />
        </div>
      </div>
      <div className="columns">
        <div className="column is-6">
          <FormInput id="txt-password" label="Senha" type="text" placeholder="Digite sua senha" required />
        </div>
      </div>
      <div className="field">
        <MainButton text="Cadastrar" type="submit" />
      </div>
    </form>
  );
}

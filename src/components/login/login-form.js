import React, { Component } from 'react';

import LoginInput from './login-input';

export default (props) => {
  return (
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <LoginInput label="Login" id="txt-login" type="text" placeholder="Digite o login" />
        <LoginInput label="Senha" id="txt-password" type="text" placeholder="Digite a senha" />
        <div className="field">
          <button className="button">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

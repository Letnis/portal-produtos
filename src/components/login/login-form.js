import React, { Component } from 'react';

import LoginInput from './login-input';
import MainButton from '../main-button';

export default (props) => {
  return (
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <LoginInput label="Login" id="txt-login" type="text" placeholder="Digite o login" />
        <LoginInput label="Senha" id="txt-password" type="text" placeholder="Digite a senha" />
        <div className="field">
          <MainButton text="Entrar" />
        </div>
        <div className="field">
          <a href="" >Clique aqui para se cadastrar</a>
        </div>
      </div>
    </div>
  );
}

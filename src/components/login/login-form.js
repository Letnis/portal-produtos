import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/cadastro">Clique aqui para se cadastrar</Link>
        </div>
      </div>
    </div>
  );
}

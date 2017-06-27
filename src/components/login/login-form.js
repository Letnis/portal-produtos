import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input';
import MainButton from '../main-button';

export default (props) => {
  return (
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <form name="login-form" method="post">
          <FormInput label="Login" id="txt-login" type="text" placeholder="Digite o login" />
          <FormInput label="Senha" id="txt-password" type="text" placeholder="Digite a senha" />
          <div className="field">
            <MainButton type="submit" text="Entrar" />
          </div>
          <div className="field">
            <Link to="/cadastro">Clique aqui para se cadastrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

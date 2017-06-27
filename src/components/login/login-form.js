import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input';
import MainButton from '../main-button';

export default (props) => {
  return (
    <form name="login-form" method="post">
      <FormInput label="Login" id="txt-login" type="text" placeholder="Digite o login" required />
      <FormInput label="Senha" id="txt-password" type="text" placeholder="Digite a senha" required />
      <div className="field">
        <MainButton type="submit" text="Entrar" />
      </div>
      <div className="field">
        <Link to="/cadastro">Clique aqui para se cadastrar</Link>
      </div>
    </form>
  );
}

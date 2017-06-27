import React, { Component } from 'react';

export default (props) => {
  return (
    <div className="field">
      <label htmlFor={props.id} className="label is-text-white">{props.label}</label>
      <p className="control">
        <input id={props.id} type={props.type} className="input" placeholder={props.placeholder} />
      </p>
    </div>
  );
}
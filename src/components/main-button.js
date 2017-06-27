import React, { Component } from 'react';

export default (props) => {
  return (
    <button type={props.type} className="button">
      {props.text}
    </button>
  )
}
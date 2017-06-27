import React, { Component } from 'react';

import Title from '../title';

export default (props) => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <Title text="Letnisup" />
        <h2 className="subtitle">
          Dashboard
        </h2>
      </div>
    </div>
  );
}

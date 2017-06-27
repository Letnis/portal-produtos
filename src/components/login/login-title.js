import React, { Component } from 'react';

import Title from '../title';
import Subtitle from '../subtitle';

export default (props) => {
  return (
    <div className="has-text-centered login-title">
      <Title text="Letnisup" />
      <Subtitle text="Dashboard" />
    </div>
  );
}

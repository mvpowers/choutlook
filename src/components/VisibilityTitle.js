import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const VisibilitySensor = require('react-visibility-sensor');

export default () => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <div>
        <Helmet>
          <title>{isVisible ? 'visible' : 'not visible'}</title>
        </Helmet>
      </div>
    )}
  </VisibilitySensor>
)

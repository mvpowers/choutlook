import React from 'react';
import { Helmet } from 'react-helmet';

const VisibilitySensor = require('react-visibility-sensor');

export default () => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <div>
        <Helmet>
          <title>{isVisible ? 'Choutlook' : 'Choutlook*'}</title>
        </Helmet>
      </div>
    )}
  </VisibilitySensor>
);

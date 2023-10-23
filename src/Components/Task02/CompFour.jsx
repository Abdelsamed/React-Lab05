import React from 'react';
import CompFive from './CompFive';

const CompFour= ({ sharedValue }) => {
  return (
    <div>
      <h2>CompFour</h2>
      <CompFive sharedValue={sharedValue} />
    </div>
  );
};

export default CompFour;
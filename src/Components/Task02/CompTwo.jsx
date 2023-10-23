import React from 'react';
import CompThree from './CompThree';

const CompTwo = ({ sharedValue }) => {
  return (
    <div>
      <h2>CompTwo</h2>
      <CompThree sharedValue={sharedValue} />
    </div>
  );
};

export default CompTwo;
import React from 'react';
import { useContext } from 'react';
import MyContext from './Context';

function CompFive() {
  const value = useContext(MyContext);

  return (
    <>
      <h2>CompFive</h2>
      <p>{value}</p>
    </>
  )};
  export default CompFive;
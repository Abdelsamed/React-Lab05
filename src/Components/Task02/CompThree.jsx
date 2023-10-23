import React from 'react';
import MyContext from './Context'
import { useContext } from 'react';
import CompFour from './CompFour'
function CompThree() {
  const value = useContext(MyContext);

  return (
    <>
      <h2>CompThree</h2>
      <p>{value}</p>
      <CompFour />
    </>
  );
}
export default CompThree;
import React, { createContext, useState, useContext } from 'react';
import CompTwo from './CompTwo';
import MyContext from './Context';

function CompOne() {
  const [value, setValue] = useState("Hello from CompOne");

  return (
    <MyContext.Provider value={value}>
      <CompTwo />
    </MyContext.Provider>
  );
}
export default CompOne;

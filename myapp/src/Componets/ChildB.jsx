import React, { useContext } from 'react'
import ChildC from './ChildC'
import { data2,data3 } from './UseContext';

function ChildB() {
  const name = useContext(data2);
  const gender = useContext(data3);
  return (
    <div>
      <h1>hi my name is {name} and my gender is {gender}</h1>
      <ChildC />
    </div>
  )
}

export default ChildB;

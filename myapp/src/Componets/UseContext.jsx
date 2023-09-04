import React, { createContext } from 'react'
import ChildA from './ChildA';

const data2 = createContext();
const data3 = createContext();

function UseContext() {
    const name="shubham"
    const gender="male";
  return (
    <div>
        <data2.Provider value={name}>
            <data3.Provider value={gender}>       
                <ChildA/>
            </data3.Provider>
        </data2.Provider>
    </div>
  )
}

export default UseContext;
export {data2,data3};

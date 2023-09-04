import React, { createContext } from 'react'
import ChildA from './ChildA'

const data = createContext();
const data1 = createContext();
function ContextAPI() {
    const name = "shubham";
    const gender = "male";
  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <ChildA/>
            </data1.Provider>
        </data.Provider>
    </div>
  )
}

export default ContextAPI;
export {data,data1};


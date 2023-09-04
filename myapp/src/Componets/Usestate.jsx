import React from 'react'
import { useState } from 'react'

function Usestate() {
    const[state,setstate]=useState(0);
    var update=()=>{
        setstate(state + 1);
    }
    return (
    <div>
      <h1>button clicked {state} time</h1>
      <button onClick={update}>Click me</button>
    </div>
    )
}

export default Usestate;

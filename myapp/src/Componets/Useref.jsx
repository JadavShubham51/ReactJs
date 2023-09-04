import React, { useState } from 'react'
import { useRef } from 'react'

function Useref() {
    const redElement = useRef("");
    const [name,setname] = useState("shubham")
    console.log(redElement);
    var Reset=()=>{
        setname("");
        redElement.current.focus()
    }
    var handleinput=()=>{
        redElement.current.style.color="red";
        redElement.current.style.background="blue";
        redElement.current.value="sujal";
    }
  return (
    <div>
      <h2>Larning useRef</h2>
      <input ref={redElement} type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleinput}>handal input</button>
    </div>
  )
}

export default Useref

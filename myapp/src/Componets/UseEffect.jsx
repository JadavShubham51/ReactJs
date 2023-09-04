import React from 'react'
import { useState,useEffect } from 'react'

function UseEffect() {
    const[state,setstate]=useState(0);
    const[data,setdata]=useState("Ram")

    useEffect(()=>{
        console.log("componet mout");
    },[])

    var update=()=>{
        setstate(state + 1);
    }
    var updatedata=()=>{
        setdata("sita");
    }
  return (
    <div>
    <h1>button clicked {state} time</h1>
    <h1>button {data} show</h1>
    
    <button onClick={update}>Click me</button>
    <button onClick={updatedata}>update data</button>
  </div>
  )
}

export default UseEffect

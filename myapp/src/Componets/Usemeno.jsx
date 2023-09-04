import React, { useMemo, useState } from 'react'

function Usemeno() {
    const[add,setadd]= useState(0);
    const[minus,setminus]= useState(100);

    const multiplication=useMemo(function multiply(){
        console.log("****************");
        return add*10;
    },[add])
  return (
    <div>
      <h1>larning Usememo</h1>
      {multiplication} <br />
      <button onClick={()=>{setadd(add+1)}}>Addition</button>
      <span>{add}</span><br />
      <button onClick={()=>{setminus(minus-1)}}>Substration</button>
      <span>{minus}</span>
    </div>
  )
}

export default Usemeno; 

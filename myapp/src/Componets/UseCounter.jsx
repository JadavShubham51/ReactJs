import React, { useState } from 'react'

function UseCounter() {
    const [count,setcount] = useState(0);

    const add=()=>{
        setcount(count+1);
    }
    const remove=()=>{
        setcount(count-1);
    }
    const defual=()=>{
        setcount(count*0);
        
    }
  return [count,add,remove,defual]
}

export default UseCounter;

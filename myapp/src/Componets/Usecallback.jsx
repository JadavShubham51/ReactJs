import React, { useCallback, useState } from 'react'
import ChildD from './ChildD';

function Usecallback() {
    const [add,setadd]=useState(0);
    const [count,setcount]=useState(0);
    const laerning=useCallback( ()=>{
        //some opartion
    },[count])
  return (
    <div>
      <h1>laerning usecallback</h1>
      <ChildD laerning={laerning} count={count}/>
      <h1>{add}</h1>
      <button onClick={()=>{setadd(add+1)}}>addtion</button>
      <h2>{count}</h2>
    <button onClick={()=>{setcount(count+2)}}>Count</button>
    </div>
  )
}

export default Usecallback

import React, { useState } from 'react'

function Child(props) {
    const [name,setname]= useState();
    function handleSubmit(e){
        e.preventDefault();
        props.getData(name)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <button >submit</button>
      </form>
    </div>
  )
}

export default Child

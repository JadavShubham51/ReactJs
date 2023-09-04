import React, { useState } from 'react'

function UseStateObject() {
    const[allvalue,setallvalue]=useState({name:"shubham",lastname:"jadav"})
  return (
    <div>
      <h1>Fist name is {allvalue.name} and last name is {allvalue.lastname}</h1>
        <button onClick={(e)=>{setallvalue({...allvalue,name:"sujal"})}}>update</button>
    </div>
  )
}
 
export default UseStateObject

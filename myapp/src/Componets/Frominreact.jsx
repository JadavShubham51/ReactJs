import React, { useState } from 'react'

function Frominreact() {
    const [name,setname]= useState("");
    const [pass,setpass]= useState("");
    function Click(e){
        console.log(e.target.name)
        if(e.target.name == 'Firstname'){
            const capname = (e.target.value).toUpperCase();
            setname(capname);
        }
        else(
            setpass(e.target.value) 
        )
    }
  return (
    <div>
        <form className='App'>
            <label>First name:</label><br />
            <input type="text" name='Firstname' value={name} onChange={Click} /><br />
            <label>password:</label><br />
            <input type="text" name='password' value={pass} onChange={Click} /><br />
        </form>
    </div>
  )
}

export default Frominreact;

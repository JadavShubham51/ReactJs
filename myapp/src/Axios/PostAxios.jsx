import axios from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const data ={fname:"",lname:""}
    const [inputdata,setinputdata]=useState(data);

    const hnadle=(e)=>{
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputdata)
        .then((res)=>{
            console.log(res);
        })
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputdata)
        .then((res)=>{
            console.log(res);
        })
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1",)
        .then((res)=>{
            console.log(res);
        })
    }
  return (
    <>
      <label>First Name:</label>
      <input type="text" name='fname' value={inputdata.fname} onChange={hnadle} /><br />
      <label>last Name:</label>
      <input type="text" name='lname' value={inputdata.lname} onChange={hnadle} /><br />
    
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default PostAxios

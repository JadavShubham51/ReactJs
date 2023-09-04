import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiousTorial() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res);
            setdata(res.data)
        })
    },[])
  return (
    <div>
      <h2>AxiosTutorial</h2>
      {
        data.map((data)=>{
            return(
                <h1>{data.name}</h1>
            )
        })
      }
    </div>
  )
}

export default AxiousTorial

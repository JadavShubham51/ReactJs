import React, { useState } from 'react'

function UseStateArray() {
    const [items,setitems]=useState([])
    console.log(items)
    function addItems(){
        setitems([...items,{
            id: items.length,
            value: Math.random()
        }])
    }
  return (
    <div>
      <h1>arry with usestate hook</h1>
      <ol>
        {
            items.map(item =>(
                <li key={item.id}><a href="#">{item.value}</a></li>
            ))
        }
      </ol>
      <button onClick={addItems}>addItems</button>
    </div>
  )
}

export default UseStateArray

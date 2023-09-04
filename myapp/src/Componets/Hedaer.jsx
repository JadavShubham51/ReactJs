import React from 'react'

function Hedaer(props) {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {/* Hader hi prop ka use karne ke liye componet use kiya he */}
    </div>
  )
}

export default Hedaer

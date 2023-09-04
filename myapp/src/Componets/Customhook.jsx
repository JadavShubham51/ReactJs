import React from 'react'
import UseCounter from './UseCounter'

function Customhook() {
    const [count,add,remove,defual]=UseCounter();
  return (
    <div>
      <h1>useCustom</h1>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>
      <button onClick={defual}>defual</button>
    </div>
  )
}

export default Customhook

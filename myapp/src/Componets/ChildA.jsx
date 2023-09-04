import React from 'react'
import ChildB from './ChildB'

function ChildA({name}) {
  return (
    <div>
      <h1>Child A {name}</h1>
      <ChildB />
    </div>
  )
}

export default ChildA

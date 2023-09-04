import React from 'react'
import ChildA from './ChildA'

function PropDrilling() {
    const name="shubham ";
  return (
    <div>
      <h1>Laening i prop drilling</h1>
      <ChildA name={name}/>
    </div>
  )
}

export default PropDrilling

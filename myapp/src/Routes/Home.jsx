import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const id = 2;
    const Navigate = useNavigate()
    const gotoabout=()=>{
        Navigate("/about", {state:{id:id}} )
    }
  return (
    <>
      <h1>Home</h1>
      {/* <Link to="/about">About</Link><br />
      <Link to="/contact">contact</Link> */}
      <button onClick={gotoabout}>About</button>
    </>
  )
}

export default Home

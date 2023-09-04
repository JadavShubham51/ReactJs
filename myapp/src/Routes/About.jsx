import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
    const location =  useLocation();
    console.log(location.state);
  return (
    <div>
      <h1>about my id is {location.state.id}</h1>
      <Link to="/">Home</Link><br />
      <Link to="/contact">contact</Link>
    </div>
  )
}

export default About
 
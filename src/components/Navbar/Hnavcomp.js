import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hnavcomp() {
  return (
    <div className="hnavcomp">
        <NavLink to='/' >HOME</NavLink>
        {/* <a href="#" className="navlink">HOME</a> */}
        <div className="underline"></div>
        <NavLink to='/about' >ABOUT</NavLink>
        {/* <a href="#" className="navlink">ABOUT</a> */}
        {/* <div className="underline"></div> */}
        {/* <NavLink to='/done' >DONE</NavLink> */}
        {/* <a href="#" className="navlink">DONE</a> */}
    </div>
  )
}

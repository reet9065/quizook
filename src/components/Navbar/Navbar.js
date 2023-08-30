import React from 'react'
import { useState } from 'react'
import logo from '../../assets/Ouizooklogo.png'
import Menuicon from "../../assets/fi-bs-align-right.png"
import Menucloseicon from "../../assets/Vector.png"
import "./Navbar.css"
import Hnav from "./Hnavcomp"
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const [navcomp , setnavcomp] = useState(false)

  function Showmenu(){
    if(navcomp){
      setnavcomp(false)
    }else{
      setnavcomp(true)
    }
  }

  return (
    <div className="navbar">
      <div className="snavbar">
        <NavLink to='/'><img src={logo} alt="" className="logo" /></NavLink>
        <div className="menuicon">
          <img src={navcomp?Menucloseicon:Menuicon} alt="Menu"  onClick={Showmenu}/>
        </div>
      </div>
      {navcomp && <Hnav/>}
    </div>
  )
}

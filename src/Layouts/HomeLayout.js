import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default HomeLayout
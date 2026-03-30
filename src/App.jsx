import React from 'react'
import {  Outlet, } from 'react-router-dom'
import Navbar from './Components/NavbarComp/Pages/Navbar'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Outlet/>
    </div>
  )
}

export default App

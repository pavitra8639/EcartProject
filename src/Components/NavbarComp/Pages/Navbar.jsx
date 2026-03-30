import React from 'react'
import Logo from './auth/Logo'
import Menu from './auth/Menu'
// import {Link} from react-router-dom

const Navbar = ({search,setSearch}) => {
  return (
    <nav className="bg-slate-400 shadow-md border-b">
      <div className="flex justify-between items-center px-8 py-4"> 
        <Logo />
        <Menu search={search} setSearch={setSearch}/>
      </div>
    </nav>
  )
}

export default Navbar
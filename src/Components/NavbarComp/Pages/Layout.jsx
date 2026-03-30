import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { CartProvider } from '../../../Context/CartContext'


const Layout = () => {
  let [search, setSearch] = useState("")
  return (
    <CartProvider>
      <main className='w-[100vw] h-[100vh] '>
        <Navbar search={search} setSearch={setSearch} />
        {/* to render children */}
        <Outlet context={{ search }} />
        <Toaster />
      </main>
    </CartProvider>
  )
}

export default Layout
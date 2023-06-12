import React from 'react'

function Navbar() {
  return (
    <div className='navbar-wrapper flex items-center justify-center gap-36 py-4 bg-black text-white'>
        <h1 className='navbar-logo font-Impact text-3xl'><a href='#'>Dunder Mifflin Inc</a></h1>
        <nav className='navbar-menu flex gap-8 text-xl font-Poppins'>
        <a href='#' className='navbar-item'>HOME</a>
        <a href='#' className='navbar-item'>ABOUT</a>
        <a href='#' className='navbar-item'>BENEFITS</a>
        <a href='#' className='navbar-item'>OFFERS</a>
        <a href='#' className='navbar-item'>CONTACT</a>            
        </nav>
    </div>
  )
}

export default Navbar
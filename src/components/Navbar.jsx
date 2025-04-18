import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mx-auto p-4 justify-center items-center flex gap-5 bg-gradient-to-br from-gray-500 to-pink-400 max-w-[1140px] w-full'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
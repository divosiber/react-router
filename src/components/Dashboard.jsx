import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
        <h1>Dahboard</h1>
        <nav className='flex gap-4'>
        <Link to='profile'>Profil</Link>
        <Link to='settings'>Setting</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

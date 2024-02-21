import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/pokedex'>Pokedex</NavLink>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Nav
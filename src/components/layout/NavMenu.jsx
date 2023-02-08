import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavMenu = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/home'>Inicio</NavLink>
          {/* <a href="/#">Inicio</a> */}</li>
        <li>   <NavLink to='/posts'>Posts</NavLink></li>
        <li>   <NavLink to='/create'>Create</NavLink></li>
        <li><a href="/#">Contacto</a></li>
      </ul>
    </nav>
  )
}

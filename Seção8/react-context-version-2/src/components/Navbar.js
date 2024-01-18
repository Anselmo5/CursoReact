import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='alingnav'>
            <h2>Context</h2>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sobre'>Sobre</NavLink>
            <NavLink to='/contatos'>Contatos</NavLink>
        </nav>
    </div>
  )
}

export default Navbar

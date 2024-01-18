import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
            <NavLink to='/'  className={styles.brand}>Mini <span>Blog</span></NavLink>

            <ul className={styles.links_list}>
                <li> <NavLink to='/' className={({isActive}) => (isActive ? styles.active: "")}>Home</NavLink> </li>
                <li> <NavLink to='/Login' className={({isActive}) => (isActive ? styles.active: "")}>Login</NavLink> </li>
                <li> <NavLink to='/Registro' className={({isActive}) => (isActive ? styles.active: "")}>Registro</NavLink> </li>
                <li> <NavLink to='/About' className={({isActive}) => (isActive ? styles.active: "")}>Sobre</NavLink> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

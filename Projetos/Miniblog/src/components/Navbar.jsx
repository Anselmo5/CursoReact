import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import { useAutentiction } from '../hooks/useAutentiction'
const Navbar = () => {
  const {user} = useAuthValue()
  const {logout} = useAutentiction()

  return (
    <div>
        <nav className={styles.navbar}>
            <NavLink to='/'  className={styles.brand}>Mini <span>Blog</span></NavLink>

            <ul className={styles.links_list}>
                <li> <NavLink to='/' className={({isActive}) => (isActive ? styles.active: "")}>Home</NavLink> </li>
                <li> <NavLink to='/About' className={({isActive}) => (isActive ? styles.active: "")}>Sobre</NavLink> </li>

               {!user&&(
                <>
                     <li> <NavLink to='/Login' className={({isActive}) => (isActive ? styles.active: "")}>Login</NavLink> </li>
                     <li> <NavLink to='/Registro' className={({isActive}) => (isActive ? styles.active: "")}>Registro</NavLink> </li>
                </>
               ) 
               }

               {user &&(
                <>
                   <li> <NavLink to='/Dashbord' className={({isActive}) => (isActive ? styles.active: "")}>Dashbord</NavLink> </li>
                    <li> <NavLink to='/post/create' className={({isActive}) => (isActive ? styles.active: "")}>Post</NavLink> </li>
                </>
               )}
            </ul>
            {user 
                &&(
                  <>
                  <button onClick={logout}>Sair</button>
                </>
            )}
        </nav>
    </div>
  )
}

export default Navbar

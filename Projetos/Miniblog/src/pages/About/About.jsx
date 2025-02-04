import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.About}>
        <h2>
            Sobre o Mini <span>Blog</span>
          </h2>

          <p>Este projeto consiste em um blog feito com React no frot-end e o back-end 
            no Firebese</p>

          <div className={styles.alingbtn}>
            <Link to='/post/create' className='btn'>
              Criar post
            </Link>
          </div>
    </div>
  )
}

export default About

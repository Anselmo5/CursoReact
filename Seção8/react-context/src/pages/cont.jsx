import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import useCounterContext from '../hook/useCounterContext'
import useTiteleContext from '../hook/useTitleContext'
const cont = () => {
  const {counter} =useCounterContext()
  const {color,dispatch} = useTiteleContext()
  return (
    <div>
        <h2 style={{color:color}}>Contato</h2>
        <div className='alingcontainer'>
            <div className='formlink'>
                  <Link to='/home'>Home</Link>
                  <Link to='/sobre'>Sobre</Link>
                  <Link className='active'>Contato</Link>
            </div>
        </div>
        <h2> valor da conta: {counter}</h2> 
    </div>
  )
}

export default cont

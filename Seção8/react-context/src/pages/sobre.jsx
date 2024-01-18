import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import useCounterContext from '../hook/useCounterContext'
import useTiteleContext from '../hook/useTitleContext'
const sobre = () => {
  const {counter} = useCounterContext()
  const {color,dispatch} = useTiteleContext()
  return (
    <div>
        <h2 style={{color:color}}>Sobre</h2>
          <div className='alingcontainer'>
            <div className='formlink'>
                  <Link to='/home'>Home</Link>
                  <Link className='active'>Sobre</Link>
                  <Link to='/cont'>Contato</Link>
            </div>
        </div>

        <h2> valor da conta: {counter}</h2>
    </div>
  )
}

export default sobre

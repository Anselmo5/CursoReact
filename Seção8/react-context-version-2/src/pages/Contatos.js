import React from 'react'
import useCounterContext from '../hooks/useCounterContext'
import useTiteleContext from '../hooks/useTiteleContext'

const Contatos = () => {
    const {counter} = useCounterContext()
    const {color,dispatch} = useTiteleContext()
  return (
    <div>
        <h2 style={{color:color}}>Contatos</h2>
        <p>Esse e o valor {counter}</p>
    </div>
  )
}

export default Contatos

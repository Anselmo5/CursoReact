import React from 'react'
import { useContext } from 'react'
import { Countercontext } from '../context/CounterContext'
const AlteracaoCounter = () => {
    const {counter,setCounter} = useContext (Countercontext)
  return (
    <div className='alingbutton'>
      <button onClick={() => setCounter(counter + 1)}>levetion the Number</button>
      <button onClick={() => setCounter(counter - 1)}> Subtration the Number</button>
    </div>
  )
}

export default AlteracaoCounter

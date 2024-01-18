import React from 'react'
import { useContext } from 'react';
import { Countercontext } from '../context/Countercontext';
const AlteracaoCounter = () => {
    const {counter,setCounter} = useContext(Countercontext)
  return (
    <div className='alingbutton'>
       <button onClick={() => setCounter(counter+1)}>Aumente o Numero</button>
       <button onClick={() => setCounter(counter-1)}>Diminuir o Numero</button>
    </div>
  )
}
export default AlteracaoCounter

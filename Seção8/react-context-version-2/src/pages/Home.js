import React from 'react'
import AlteracaoCounter from '../components/AlteracaoCounter'
import useCounterContext from '../hooks/useCounterContext'
import useTiteleContext from '../hooks/useTiteleContext'
import Navbar from '../components/Navbar'
const Home = () => {

  const {counter} = useCounterContext()
  const {color,dispatch} = useTiteleContext()

  const setTitlecolor = (color) =>{
    dispatch({type:color})
  };  

  return (
    <div>
       <h2 style={{ color: color }}>Home</h2>
      <p>Esse e o valor {counter}</p>
      <AlteracaoCounter/>
      <div className='alingbtn'>
          <button onClick={() => setTitlecolor("RED")}>Vermelho</button>
          <button onClick={() => setTitlecolor("BLUE")}>AzulL</button>
          <button onClick={() => setTitlecolor("WHITE")}>Branco </button>
      </div>
    </div>
  )
}

export default Home

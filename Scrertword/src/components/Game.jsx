import React from 'react'
import './Game.css'
const Game = ({ verifyletter}) => {
  return (
    <div className='App'>
        <h2>Secret Word</h2>
        <button onClick={verifyletter}> Finalizar Jogo</button>
    </div>
  )
}

export default Game
import React from 'react'
import './Gameover.css'

const Gameover = ({retry}) => {
  return (
    <div className='App'>
      <h2>Gamer over</h2>
        <button onClick={retry}>Reiniciar</button>
     </div>
  )
}

export default Gameover
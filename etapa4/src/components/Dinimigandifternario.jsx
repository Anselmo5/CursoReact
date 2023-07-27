import React from 'react'
import { useState } from 'react'

const Dinimigandifternario = () => {
  const [number,setnumbre] = useState(10)
  return (
    <div>
        <h2 style={ number > 10 ? ({color:"darksalmon"}) : ({color:"yellow"})}> Recebemos esse numero: {number} </h2>
      <button onClick={() => setnumbre(15)}>Altere</button>
      {/* Aqui estamos realizando um inline dinamigo com um if ternario, onde colocamos uma condição para um estilho apareser */}
    </div>
  )
}

export default Dinimigandifternario

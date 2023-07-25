import React from 'react'

const CardRenderDestruck = ({brand,km,pneus}) => {
  return (
    <div>
        <h1>Destrucktor</h1>
      <h2>Esse e o carro</h2>
      <ul>
        <li> marga: {brand} </li>
        <li> Kilometragem: {km} </li>
        <li> Quantidade: {pneus} </li>
      </ul>
    </div>
  )
}

export default CardRenderDestruck

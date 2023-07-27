import React, { useState } from 'react'
import "./DinamigClass.css"

const DinamigClass = () => {
    const [view,setview] = useState(true)
  return (
    <div>
      <h2 className={ view ? "um": "dois"}> Classes Dinamogas</h2>
      <button onClick={() => setview(false)}>Altere</button>
      <button onClick={() => setview(true)}>volte</button>
      {/* Aqui temos uma visãp diferente de utlizarmos uma condição no react, onde damos dinamisidade para classes css alterarem em seus estilos dependendo do valor da função */}
    </div>
  )
}

export default DinamigClass

import React, { useState } from 'react'

const Ternario = () => {
    const [nome,setnome] =  useState("joão")
  return (
    
    <div>
        <h1>If Ternario</h1>
    {nome === "joão" ? (
        <div>
            <p> O nome e joão</p>
        </div>
    ) : ( 
        <div>
            <p>nome não encontrado</p>
        </div>
    )}
    
      <button onClick={()=> setnome("joão")}>Volte</button>
      <button onClick={() => setnome("Mateus")}>Troque</button>
    </div>
  )
}

export default Ternario

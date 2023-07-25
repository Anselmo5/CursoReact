import React, { useState } from 'react'

const Condicionaltender = () => {
    const [x] = useState(false)
  return (
    <div>
      { x && <p>Isso e true</p>} {/*No react o & comercial e utilizado como concatenação tendo a sintaxe de: (variavel && conteudo) */}
      { ! x && <p>esse valor deveaparecer com !</p>} {/* A ! tem o papel de nos da a alternativa de trocar o valor, no caso if(verdairo) or false(falso)*/}
    </div>
  )
}

export default Condicionaltender

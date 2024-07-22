import React from 'react'
import { useState } from 'react'

const HookUsaState = () => {
    // Mudança de Nome com UseState
    const [name,SetName] = useState('Anselmo')
    let useName = 'Pedro Henrique'

    const troca = () =>{
        SetName('Henrique Silveira')
        useName('Matias batista')
    }

    const troca2 = () =>{
        SetName('Anselmo')
    }

    // Hook em formulario

    const [idade, setIdate] = useState('')
    const [idadeFutura, setIdadeFutura] =useState('')

    const Handlesubmit = (event) =>{
        event.preventDefault()
        console.log(idade);
        console.log(idadeFutura);
    }

  return (
    <div>
      <h2>{useName}</h2>
      <h2>{name}</h2>
      <button onClick={() => troca()}> Esquerda</button>
      <button onClick={() => troca2()}>Direita</button>

      {/* Hook em formulario */}

      <form onSubmit={Handlesubmit}>
        <label>Quantos anos você tem</label>
        <input type="text" value={idade} onChange={ (event) => setIdate(event.target.value)}/>
        <label>Quantos anos você vai ter daqui a 6 anos</label>
        <input type="text" value={idadeFutura} onChange={(event) => setIdadeFutura(event.target.value)}/>
        <h3> sua idade {idade}</h3>
        <h3>Sua idade daqui a seis anos {idadeFutura} </h3>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default HookUsaState

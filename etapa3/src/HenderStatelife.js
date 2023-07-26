import React from 'react'

const HenderStatelife = ({hendeler}) => {
    const menssages = ["Oi","Olá","Tudo bem?","Bom dia",""]
  return (
    <div>
      <button onClick={() =>hendeler(menssages[0])}>1</button>
      <button onClick={() =>hendeler(menssages[1])}>2</button>
      <button onClick={() =>hendeler(menssages[2])}>3</button>
      <button onClick={() =>hendeler(menssages[3])}>4</button>
      <button onClick={() => hendeler(menssages[4])}>limpe</button>
    </div>
  )
}

export default HenderStatelife

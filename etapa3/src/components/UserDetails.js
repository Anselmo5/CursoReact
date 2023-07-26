import React from 'react'

const UserDetails = ({name,idade,proficao,}) => {
  return (
    <div>
      
        <h2> Você se Chama: {name} </h2>
        <p> Você tem: {idade}</p>
        <p> Trabalha como {proficao} </p>
        {idade >= 18 ? (<p>Pode Dirigir</p>): (<p>Não Pode dirigir</p>)}
    
    </div>
  )
}

export default UserDetails

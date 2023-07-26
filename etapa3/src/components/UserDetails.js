import React from 'react'

const UserDetails = ({name,idade,proficao,podedirigir}) => {
  return (
    <div>
      <ul>
        <li> Você se Chama: {name} </li>
        <li> Você tem: {idade}</li>
        <li> Trabalha como {proficao} </li>
        {podedirigir && <p> Você Esta Apito Para Dirigit!</p>}
        {!podedirigir && <p> Você Ainda Não Tem Idade Para Ditigir</p>} 
      </ul>
    </div>
  )
}

export default UserDetails

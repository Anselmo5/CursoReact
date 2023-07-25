import React from 'react'

const ListRenderComponents = ({killo,preco,fruta,empromocao,euma}) => {
  return (
    <div>
        <h2> Rendenrização de lista em componente</h2>
      <ul>
        <li>O killo e : {killo} </li>
        <li> o Preço e : {preco} </li>
        <li> sua fruta e uma : {fruta} </li>
        {euma && <p> sim e uma fruta</p>}
        {!euma && <p> não e uma fruta</p> }
         {empromocao && <p>essa ta em promoção em!</p>}
      </ul>
    </div>
  )
}

export default ListRenderComponents

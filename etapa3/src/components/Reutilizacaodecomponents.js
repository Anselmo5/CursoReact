import React from 'react'

const Reutilizacaodecomponents = ({marga,cor,pneus,km,nemCar}) => {
    // com o props a reutilização de components tem muito mais sentido.
    // onde por um exemplo se em alguma empresa digamos que temos 1000 informaçoes de carros diferentes, então iremos  reaprofeitar mil dados de carros diferentes.
    // no exemplo a  baixo reaprofeitamos informações de um carro,dando distaque para um condição que aparecera quando o carro for novo.
    // para ver o resultado execute o codigo com (npm start), ser por acaso verifique se esta na pasta do projeto (etapa3), e se mesmo assim não for, na pasta etapa3 execute o comando no termiinal: (yarn - se você tiver instalado) ou (npm i)
  return (
    <div>
      <h2> Venda de Carros</h2>
      <ul>
        <li>Marga: {marga} </li>
        <li>cor: {cor} </li>
        <li>pneus: {pneus} </li>
        <li>kilometros rodados: {km} </li>
        {nemCar && <p> esse carro e novo! </p>}
      </ul>

    </div>
  )
}

export default Reutilizacaodecomponents

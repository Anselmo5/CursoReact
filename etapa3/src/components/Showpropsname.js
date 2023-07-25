import React from 'react'

const Showpropsname = (props) => {
  return (
    <div>
      <h2> Essa e a {props.name} nossa lider</h2> {/* tudo que quisermos executar em react/javascript utilizaremos {} */}
      {/* o conceito de props e a herança de um pai para um filho, onde colocaremos um valor dentro do componente filho que esta dentro do pai e poderemos estrair os daos.
        Componente filho:(Showpropsname)
        Componente pai: (App)
      */}
    </div>
  )
}

export default Showpropsname

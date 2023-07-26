import "./MyComponents.css"

const MyComponents = () => {
  return (
    <div>
      <h1>Css de MyComponents</h1> {/* A diferença do css Global e do css components,  e que o global pega dos elementos que você esta estilizando e define isso como padrão para todos os elemneto iguais.*/}  
      {/* Já o de components você define um estilo para cada elemento indifidual. */}
      <h1 className="teste">oiii</h1>
    </div>
  )
}

export default MyComponents

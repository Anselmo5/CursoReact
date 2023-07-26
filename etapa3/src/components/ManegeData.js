import { useState } from "react"


const ManegeData = (props) => {
    let SomeData = 10 // primeira forma de teste de alteração da variavel, que não vai da certo

   const [number,setNumber] =useState (5)

   const Clik = () => {
    const random = (number) = Math.floor(Math.random() * number);
    setNumber(random);
    
}

  
  return (
    <div> 
        <h2>esse e o valor da variavel {SomeData}</h2>
        <div>
            <button onClick={() =>(SomeData = 20) }>Click Aqui  </button>  {/*não podemos mudar uma variavel pelo fato de ela não rendenrizar*/}
        </div>

        <div>
            <h2>esse e o seu valor {number}</h2>
            <button onClick={() => setNumber(15)}> Clik Aqui</button>
        </div>
    </div>
  )
}

export default ManegeData

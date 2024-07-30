import React from 'react'
import{useState,useEffect} from 'react'
// execução do useEffect sem dependencias


const HookUseEffect = () => {
// 1)
    // const [number,setNumber] = useState(1)

    // useEffect(()=>{
    //     console.log("Executado")
    // })
    // no useEffect conseguimos ter um controle de execução de uma determinada função.
    // Por exemplo: quando o button que está abaixo e clicado o console.log do useEffect também é
    // disparado, por causa da reredenrização, mas se qualque outro for ativado,cliacdo,usado, não executara o useEffect

    // const soma = () =>{
    //     setNumber(number+1)
    // }

// 2)
    // usando um array de dependencia vazioff

    // useEffect(() =>{
    //     console.log("Executado apenas uma fez")
    // },[])
    // com o array de dependencia eu não tenho a execução do useEffect quando o componente e rerederizado
    // por exemplo quando o button e clicado eu tenho a execução do primeiro useEffect que não tem o array de dependencia,
    // Mas o segundo useEffect que tem o array de dependencia não executado, justamente por ter esse array de dependencia.

// 3
    // const [number,setNumber] = useState(0)

    // useEffect(() =>{
    //     if(number > 0){
    //         console.log("Sou executado apenas quando o number for chamado")
    //     }
    // },[number])

    // um pouco diferente do exemplo dois, o exemplo três tem um item que cria essa dependencia.
    // Então o useEffect so vai ser executado quando o number for alterado.
    // obs: o primeiro exemplo de useEffect também é executado, porque ele sempre executa quando tem uma ação no componente,
    // independentemente se ele tem number como dependencia, por causa da forma que ele foi construido ele tem esse comportamento


  return (
    <div>
        {/* 1) */}
        {/* <h3>Numero: {number}</h3>
        <button onClick={() => soma()}> Enviar</button> */}
        {/* 3) */}
        {/* <h3>Dependencia no UseEffect: {number}</h3>
        <button onClick={() => setNumber(number+1)}>Envio Dependencia</button> */}
    </div>
  )
}

export default HookUseEffect

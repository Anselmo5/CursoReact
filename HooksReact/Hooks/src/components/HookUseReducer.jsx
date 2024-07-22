import React, { useState } from 'react'
import { useReducer } from 'react'
const HookUseReducer = () => {
    // 1
    const [numero,dispatch] = useReducer((state, action) =>{
        return Math.random(state)

        // o state que estar servindo de argumento para .random e na realidade a primeira variavel numero
        // a segunda variavel chamada aqui de dispatch e a função que vai ser executada
    })


    // 2

    // primeiro vamos criar o initialTaks que carregara as informações inicias(argumentos)
    const initialTaks = [
        {id:1, Texto:'Fazer um bolo'},
        {id:2, Texto:'Fazer as Tarefas da escola'}
    ]

    // Aqui e onde passaremos os state e o action
    const taskReducer = (state,action) =>{
        //  agora criaremos as ações que o codigo vai ter para cada condição executada
        switch (action.type){
            case "ADD": //Adicionando tarafa
                const newTask ={
                    id:Math.random(),
                    Texto:taskTexto
                };

                setTaskTexto("") //Estamos limpando o input
                
                return [...state,newTask]
            
                case "REMOVE": // Deletando a tarefa
                return state.filter((task) => task.id !== action.id)
                default:
                    return state;
        }
    }


    // variaveis que chamaram nossos argumentos
    const [taskTexto, setTaskTexto] =useState("")
    const [taks,dispatchTasks] = useReducer(taskReducer,initialTaks)

    // função criada para que o formulario não fique dando reload a cada envio do formulario,
    //  e também para que quando o formulario for enviado a tarava seja eficionada na lista
    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatchTasks({type:"ADD"})
    }

    // Função que vai remover a tarefa
    const removeTask = (id) =>{
        dispatchTasks({type:"REMOVE",id:id})
    }


  return (
    <div>
       <h2>Use Reducer</h2>
       {/* 1 */}
       {/* O UseReducer assim como o o useState gerancia os valores, mas a diferença do 
       useReducer e que dentro dele podemos fazer uma função que é executada quando o state é executado*/}

       <p>Numero alterados: {numero}</p>
       <button onClick={() => dispatch()}>Alterar</button>

        {/* 2 */}
       {/* Usereducer de em um contexto mais complicado utilizando agora  action */}

        {/* Faremos um formulario para poder enviar novas tarefas */}
        <form onSubmit={handleSubmit}>
            <input type="text" 
             value={taskTexto} 
             onChange={(event) => 
             setTaskTexto(event.target.value)} 
            />

            <input type="submit" value='Adicionar'/>
        </form>


        {/*Vamos mostrar os argumentos  */}

        <ul>
            {taks.map((task) => (
                <li key={task.id}> {task.Texto} <button onClick={() => removeTask(task.id)}>Excluir</button></li>
            ))}
        </ul>

    </div>
  )
}

export default HookUseReducer

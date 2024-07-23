import React, { useReducer } from 'react'
import './style.css'
import {useState} from 'react'

const Home = () => {


// Vamos criar aqui os argumentos inicias do projeto

const initialTaks = [
    {id:1, Texto:'Treniar Pernas'},
    {id:2, Texto:'Passar Tempo com Minha Filha' }
]


// Aqui e onde passaremos os state e o action
const taskReducer = (state,action) =>{
      //  agora criaremos as ações que o codigo vai ter para cada condição executada
    switch (action.type){
        case "ADD":  //Adicionando a tarefa
            const novaTarefa ={
                id:Math.random(),
                Texto:taskTexto
            };

        setTaskTexto("") //Estamos limpando o input

        return [...state,novaTarefa]

        case "REMOVE": //Deletando a tarefa
        return state.filter((task) => task.id !== action.id)
        default:
            return state;
    }
}
const [taskTexto,setTaskTexto] = useState("")
const [taks,dispatchTasks] = useReducer(taskReducer,initialTaks)

 // função criada para que o formulario não fique dando reload a cada envio do formulario,
    //  e também para que quando o formulario for enviado a tarava seja eficionada na lista
const handleSubmit = (e) =>{
    e.preventDefault()
    dispatchTasks({type:"ADD"})
}

const removeTask = (id) =>{
    dispatchTasks({type:"REMOVE",id:id})
}



  return (
    <div className='aling'>
        <div className='Text'>
             <h2>Lista de Tarefas</h2>
        </div>

        <div className='Tarefas'>

             {/* Faremos um formulario para poder enviar novas tarefas */}
                <form onSubmit={handleSubmit}>
                    <h2> Incira a sua Tarefa</h2>

                    <div className='TaskEnvio'> 
                        <input 
                            type="text" 
                            value={taskTexto} 
                            onChange={(event) => 
                            setTaskTexto(event.target.value)} 
                        />

                        <button>ADICIONAR</button>
                    </div>

                </form>

            {/*Vamos mostrar os argumentos  */}
            <div className='scrollist'>
                <ul>
                    {taks.map((task) =>(
                        <li key={task.id}> {task.Texto} <button onClick={() => removeTask(task.id)}>EXCLUIR</button></li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Home

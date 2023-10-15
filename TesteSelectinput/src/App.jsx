import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [namealunos, setnameAlunos] = useState([])

  const url = "http://localhost:3000/estudantes"

  useEffect (() =>{
    async function fecthData(){
      const res = await fetch(url)
      const data = await res.json()
      setnameAlunos(data)
    }
    fecthData()
  }, [])


  return (
    <>
      <div className='Aling'>
          <div className="form">
          <select className='form'>
            {namealunos.map((aluno) => (  //sintaxe do uso do map
              <option key={aluno.id} className='form2'>
                Alino: {aluno.nome} Sala: {aluno.turma} 
              </option>
            ))}
          </select>
          </div>
      </div>
       
    </>
  )
}

export default App

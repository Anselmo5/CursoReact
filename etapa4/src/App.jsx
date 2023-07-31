import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'
import Inlinestyle from './components/Inlinestyle'
import Dinimigandifternario from './components/Dinimigandifternario'
import DinamigClass from './components/DinamigClass'
import Mudulos from './components/Titele'
import Challengecss from './components/Callengecss'


function App() {


const Carros = [
  {id: 1,cor : "blue", rodas : 4, marca: 'ford'},
  {id: 2,cor : "red", rodas : 4, marca: 'volcs'},
  {id: 3,cor : "blue", rodas : 4, marca: 'gol'},
]


  return (
    <>
    {/* Css global */}
      <h2>Essa Seção E Sobre Css</h2>
    {/* Css de Components */}
    <MyComponents/>
    {/* Inline css */}
    <Inlinestyle/>
    {/* Inline css dinamigo com if ternario */}
    <Dinimigandifternario/>
    {/* Classes dinamigas com if ternario */}
    <DinamigClass/>
    {/* Css Modules */}
    <Mudulos/>
    {/* Desafio */}

    {Carros.map(carros =>(
       <Challengecss
       key={carros.id}
       cor={carros.cor}
       rodas={carros.rodas}
       marca={carros.marca}
       />
    ))}
    </>
  )
}

export default App

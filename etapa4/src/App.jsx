import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'
import Inlinestyle from './components/Inlinestyle'
import Dinimigandifternario from './components/Dinimigandifternario'
import DinamigClass from './components/DinamigClass'
import Mudulos from './components/Titele'


function App() {

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
    </>
  )
}

export default App

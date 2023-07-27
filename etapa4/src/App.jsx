import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'
import Inlinestyle from './components/Inlinestyle'

function App() {

  return (
    <>
    {/* Css global */}
      <h2>Essa Seção E Sobre Css</h2>
    {/* Css de Components */}
    <MyComponents/>
    {/* Inline css */}
    <Inlinestyle/>
    </>
  )
}

export default App

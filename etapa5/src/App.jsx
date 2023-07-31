import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myform from './components/Myform'
import Myform2 from './components/Myform2'
import Envioforms from './components/Envioforms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Forms */}
      <Myform/>
      {/* Label envolvendo o input */}
      <Myform2/>
      {/* Envio do formulario */}
      <Envioforms/>
    </>
  )
}

export default App

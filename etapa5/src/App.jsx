import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myform from './components/Myform'
import Myform2 from './components/Myform2'
import Envioforms from './components/Envioforms'
import Controllerdinputs from './components/Controllerdinputs'
import Limpezaformulario from './components/Limpezaformulario'
import Textearea from './components/Textearea'
import Selectinput from './components/Selectinput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Forms */}
      {/* <Myform/> */}
      {/* Label envolvendo o input */}
      {/* <Myform2/> */}
      {/* Envio do formulario */}
      {/* <Envioforms/> */}
      {/* Controle de inputs */}
      {/* <Controllerdinputs user={{name: "Anselmo", email: "Anselmo@gmail.com"}} /> */}
      {/* Limpeza formulario */}
      {/* <Limpezaformulario user={{names:"Anselmo", email:"Anselmo@gmail.com"}} /> */}
      {/* <Textearea/> */}
      <Selectinput user={{nome: "Anselmo", email:"Anselmo@gmail.com", role:"Developer", bio:"Sou um desenvolvedor renomado de 28 anos"}} />
    </>
  )
}

export default App

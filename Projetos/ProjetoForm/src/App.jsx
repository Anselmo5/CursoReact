import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndexForm from './Components/IndexForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Formação do form */}
    <IndexForm/>
    </>
  )
}

export default App

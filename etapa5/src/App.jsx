import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myform from './components/Myform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Forms */}
      <Myform/>
    </>
  )
}

export default App

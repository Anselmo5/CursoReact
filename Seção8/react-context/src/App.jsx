import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='alingcontainer'>
            <div className='formlink'>
                  <Link to='/home'>Home</Link>
                  <Link to='/sobre'>Sobre</Link>
                  <Link to='/cont'>Contato</Link>
            </div>
        </div>
    </>
  )
}

export default App

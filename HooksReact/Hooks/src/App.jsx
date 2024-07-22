import './App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'

function App() {

  return (
    <>
      <div className='App'>
          <h2>React Hooks</h2>
          <BrowserRouter>
            <ul>
              <li> <Link to='/'>Home</Link></li> 
            </ul>

            <ul>
              <li> <Link to='/Sobre'>Sobre</Link></li> 
            </ul>

              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Sobre' element={<Sobre/>} />
              </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App

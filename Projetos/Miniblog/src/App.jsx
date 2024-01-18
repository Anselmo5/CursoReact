import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <div className="container">
          <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/About' element= {<About/>}></Route>
            <Route path='/Login' element= {<Login/>}></Route>
            <Route path='/Registro' element= {<Registro/>}></Route>
        </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

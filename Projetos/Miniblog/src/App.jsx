import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <div className="container">
          <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/About' element= {<About/>}></Route>
        </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'

import { useAutentiction } from './hooks/useAutentiction'
import { AuthContextProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState,useEffect } from 'react'
function App() {

  const [user,setUser] = useState(undefined)
  const [auth] =useAutentiction()

  const loadingUser = user === undefined  //loading do usuario ou dos dados do usuario.

  if(loadingUser){ //loading
    return <p>Caregando...</p>
  }

  useEffect(() => {  //careamento de dados do usuario
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    },[auth])
  })


  return (
    <>
    <AuthContextProvider value={auth}>
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
     </AuthContextProvider>
    </>
  )
}

export default App

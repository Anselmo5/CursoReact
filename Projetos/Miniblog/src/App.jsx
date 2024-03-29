import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
import Cretepost from  './pages/createPost/Createpost'
import Dashbord from './pages/Dashbord/Dashbord'

import { useAutentiction } from './hooks/useAutentiction'
import { AuthContextProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState,useEffect } from 'react'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'
function App() {

  const [user,setUser] = useState(undefined)
  const {auth} =useAutentiction()

  const loadingUser = user === undefined  //loading do usuario ou dos dados do usuario.


  useEffect(() => {  //careamento de dados do usuario
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  },[auth])

  if(loadingUser){ //loading
    return <p>Caregando...</p>
  }


  return (
    <>
    <AuthContextProvider value={{user}}>
      <BrowserRouter>
      <Navbar/>
          <div className="container">
          <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/About' element= {<About/>}></Route>
            <Route path='/Post/:id' element= {<Post/>}></Route>
            <Route path='/Search' element= {<Search/>}></Route>
            <Route path="/posts/edit/:id"element={user ? <EditPost/> : <Navigate to="/login" />} />
            <Route path='/Login' element= {!user ?<Login/> : <Navigate to='/'/>}></Route>
            <Route path='/Registro' element= {!user ?<Registro/> : <Navigate to='/'/>}></Route>
            <Route path='/post/create' element= {user ?<Cretepost/> : <Navigate to="/Login"/>}></Route>
            <Route path='/Dashbord' element= {user ?<Dashbord/> : <Navigate to='/Login'/>}></Route>
        </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
     </AuthContextProvider>
    </>
  )
}

export default App

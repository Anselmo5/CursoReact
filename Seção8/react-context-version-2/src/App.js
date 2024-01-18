import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/sobre' element= {<Sobre/>}></Route>
            <Route path='/contatos' element= {<Contatos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

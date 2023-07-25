import logo from './logo.svg';
import './App.css';
import moon from './assets/ts.gif' // podemos utilizar o metodo assets onde utilizamos um import como variavel
import ManegeData from './components/ManegeData';
import ListRender from './components/ListRender';
import Condicionaltender from './components/Condicionaltender';
import Ternario from './components/Ternario';




function App() {
  return (
    <div className="App">
      <h2> Terceira cessão do curso</h2>
      {/* <img src="/img1.png" alt="parralax"/>  img em public */}

      <div>
        {/* <img src={moon} alt="" /> */}
      
      </div>
      <ListRender/>
      <ManegeData/>
      <Condicionaltender/>
      <Ternario/>
    </div>

    
  );
}

export default App;

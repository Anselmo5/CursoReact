import logo from './logo.svg';
import './App.css';
import moon from './assets/ts.gif' // podemos utilizar o metodo assets onde utilizamos um import como variavel
import ManegeData from './components/ManegeData';
import ListRender from './components/ListRender';
import Condicionaltender from './components/Condicionaltender';
import Ternario from './components/Ternario';
import Showpropsname from './components/Showpropsname';
import { useState } from 'react';
import CardRenderDestruck from './components/CardRenderDestruck';
import Reutilizacaodecomponents from './components/Reutilizacaodecomponents';




function App() {
   const [username,setname] = useState("maria") //valor dinamico (Conteudo props)
  //  const name = "mateus" uma das forma que pode ser feito(Conteudo props)

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
      <Showpropsname name={username} /> {/*name="mateus" Outra forma de se fazer (Conteudo props)*/} 
      <CardRenderDestruck brand="Volcs" km={10023} pneus={4} />
      <Reutilizacaodecomponents marga="fiat" cor="azul" pneus={4} km={1000}  nemCar={false} />
      <Reutilizacaodecomponents marga="fiat" cor="azul" pneus={4} km={0} nemCar={true} />
      <Reutilizacaodecomponents marga="fiat" cor="azul" pneus={4} km={100} nemCar={false} />
      <Reutilizacaodecomponents marga="fiat" cor="azul" pneus={4} km={2000} nemCar={false} />

    </div>

    
  );
}

export default App;

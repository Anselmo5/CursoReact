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
import ListRenderComponents from './components/ListRenderComponents';




function App() {
   const [username,setname] = useState("maria") //valor dinamico (Conteudo props)
  //  const name = "mateus" uma das forma que pode ser feito(Conteudo props)
  
  const frutas=[ // sintaxe de um array
    {id : 1, killo : "12K", preco: "15$", empromocao:false,fruta: "maça", euma:true },
    {id : 2, killo : "4K", preco: "5$", empromocao:true, fruta: "laranja", euma:true },
    {id : 3, killo : "5K", preco: "30$", empromocao:false, fruta: "ovo", euma: false },
  ]
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
      {frutas.map(frutas =>(
        <ListRenderComponents
          killo={frutas.killo}
          preco={frutas.preco}
          empromocao={frutas.empromocao}
          fruta={frutas.fruta}
          euma={frutas.euma}

        />

      )) }

    </div>

    
  );
}

export default App;

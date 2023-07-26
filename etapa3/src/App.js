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
import { Fragmentsestrute } from './components/Fragmentestrute';
import { Container } from './components/Container';
import ExecuterFunction from './components/ExecuterFunction';
import HenderStatelife from './HenderStatelife';
import Message from './components/Message';
import UserDetails from './components/UserDetails';




function App() {
   const [username,setname] = useState("maria") //valor dinamico (Conteudo props)
  //  const name = "mateus" uma das forma que pode ser feito(Conteudo props)
  
  const frutas=[ // sintaxe de um array
    {id : 1, killo : "12K", preco: "15$", empromocao:false,fruta: "maça", euma:true },
    {id : 2, killo : "4K", preco: "5$", empromocao:true, fruta: "laranja", euma:true },
    {id : 3, killo : "5K", preco: "30$", empromocao:false, fruta: "ovo", euma: false },
  ]

  // Array desafio

  const Pessoas =[
     {id:1, nome: "Anselmo", idade:17, proficao: "Desenvolvedor Web", },
     {id:2, nome: "Marizan", idade:53, proficao: "costureira",},
     {id:3, nome: "Sergio", idade:36, proficao: "Pedreiro",}
  ]


    function shoemenssagem(){
      console.log("Por favor funciona");
    }


    const [mensagem,setmensagem] = useState("")
    function handlermensage (msg){
      setmensagem(msg)
    }

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
          key={frutas.id}
          killo={frutas.killo}
          preco={frutas.preco}
          empromocao={frutas.empromocao}
          fruta={frutas.fruta}
          euma={frutas.euma}  />
      )) }
    <Fragmentsestrute/>

    <Container mydata={12}> {/* temos desntro do react o conceito de  children-props onde temos um elemento filho que utiliza propriedades do pai.
     como se fosse um container que abraça todo o tipo de dato de enviado.
     Exemplo abaixo:
     */}
     <p> Testando o children</p>
     <p> testando de novo</p>
    </Container>

     {/* Function props */}
     <ExecuterFunction my={shoemenssagem} />
      {/* State life */}
      <Message msg={mensagem} />
      <HenderStatelife hendeler={handlermensage} />
      {/* Desafio */}
       {Pessoas.map(Pessoas =>(
        <UserDetails
          key={Pessoas.id}
          name={Pessoas.nome}
          idade={Pessoas.idade}
          proficao={Pessoas.proficao}
        />
       ))}
       
       </div>

    
  );
}

export default App;

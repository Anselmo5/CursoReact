import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")

  const handlesubmit = async (event) => {
    event.preventDefault();

    const product ={
      name,
      price,
    };
 

    const res = await fetch(url,{
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(product)
    })

    // Carregamento dinâmico, ao insves de esperar o reload da pagina para os dados aparecerem, agora os dados são incerido direto apos a requisição ser feita
    const adisionarProduto = await res.json()

    setProducts((previProdutos) => [...previProdutos,adisionarProduto])
    
    setName("")
    setPrice("")
  }

  const url ='http://localhost:3000/products'
  // await - aguarde  fetch - buscar

  useEffect(()=>{
    async function fecthData(){
      const res = await fetch(url)
      const data =await res.json()
      setProducts(data)
    }
    fecthData()
  },[])


  //nessa seção trararemos sobre requisições http em react, criando junto um backend. 
  //onde usaremos o json-serve para simular uma Api
  return (
    <>
      <div className="App">
          <h2>Listagem de Produtos</h2>
          <ul className='form'>
            {products.map((product) => (  //sintaxe do uso do map
              <li key={product.id} className='form2'>
                 {product.name} R$: {product.price} 
              </li>
            ))}
          </ul>

          <form onSubmit={handlesubmit} className='formulario'>
            <label className='alinlabel'>
               Name:
               <input 
                type="text" 
                placeholder='Nome do Produto'
                value={name}
                name='name'
                onChange={(event) => setName(event.target.value)}
                className='inp'
               />
            </label>


            <label className='alinlabel'>
               Preço:
               <input 
                type="number" 
                placeholder='Valor do Produto'
                value={price}
                name='price'
                onChange={(event) => setPrice(event.target.value)}
                className='inp'
               />
            </label>

            <input type="submit" value="Criar"    className='btn'/>
          </form>
      </div>
    </>
  )
}

export default App

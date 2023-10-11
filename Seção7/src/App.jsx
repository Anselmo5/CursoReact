import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [name,setname] = useState("")
  const [price,setprice] = useState("")

  const handlesubmit = async (event) => {
    event.preventDefault();

    const product ={
      name:name,
      price:price,
    };

    const res = await fetch(url,{
      method: "POST",
      headers:{
        "content-type" : "application/json"
      }
    })
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
              <li key={product.id}>
                 {product.name} R$: {product.price} 
              </li>
            ))}
          </ul>

          <form onSubmit={handlesubmit}>
            <label>
               Name:
               <input 
                type="text" 
                placeholder='Nome do Produto'
                value={name}
                name='name'
                onChange={(event) => setname(event.target.value)}
               />
            </label>


            <label>
               Preço:
               <input 
                type="text" 
                placeholder='Valor do Produto'
                value={price}
                name='price'
                onChange={(event) => setprice(event.target.value)}
               />
            </label>

            <input type="submit" value="Criar" />
          </form>
      </div>
    </>
  )
}

export default App

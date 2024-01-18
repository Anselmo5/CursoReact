import { Link } from 'react-router-dom'
import '../App.css'
import AlteracaoCounter from '../components/AlteracaoCounter'
import useCounterContext from '../hook/useCounterContext'
import useTiteleContext from '../hook/useTitleContext'
const home = () => {

    const {counter} = useCounterContext()
    const {color,dispatch} = useTiteleContext()

    const setTitlecolor = (color) =>{
      dispatch({type:color})
    }

  return (
    <div>
       <h2 style={{color:color}}>Home</h2>
        <div className='alingcontainer'>
            <div className='formlink'>
                  <Link className='active'>Home</Link>
                  <Link to='/sobre'>Sobre</Link>
                  <Link to='/cont'>Contato</Link>
                  <Link to='/'>Index</Link>
            </div>
        </div>


        <h2> valor da conta: {counter}</h2>
        <button onClick={() => setTitlecolor("RED")}>Vermelho</button>
          <button onClick={() => setTitlecolor("BLUE")}>AzulL</button>
          <button onClick={() => setTitlecolor("WHITE")}>Branco </button>

      <AlteracaoCounter/>      
    </div>
  )
}

export default home

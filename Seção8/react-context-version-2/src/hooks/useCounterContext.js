// utilizar um hook torna a logica o codigo mais simples,
//porque em uma pagina  por exemplo eu so chamaria o elemento como se fosse uma função,
//porque tota a constrção do chamado do context estaria no hook

import { useContext } from 'react'
import { Countercontext } from '../context/CounterContext'
const useCounterContext = () => {
    const context = useContext(Countercontext)


      if (!context) {
        console.log('O correu algum erro no context');
      } 
  return context  
}

export default useCounterContext

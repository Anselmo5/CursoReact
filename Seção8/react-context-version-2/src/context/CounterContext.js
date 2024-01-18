// sintaxe inicial da criação do context
import { useState, createContext } from "react"; 
// E interesante o usar o contexto quando se deseja incluir e alterar dados de mais de uma pagina, porque o context tras uma dinamica maior para isso.
export const Countercontext = createContext();

// criação do provider 
export const Countercontextprovider = ({children}) => {   //children serve para encapsularmos os elementos, 
    //e ainda continuar imprimindo os conteúdos deles dentro de um outro componente.

    const [counter, setCounter] = useState(5) // contexto que será compartilhado para outros componentes

    return(
        <Countercontext.Provider value={{counter,setCounter}}>  {/* valor que será mandado */}
            {children}
        </Countercontext.Provider>
    );
}

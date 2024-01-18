import { useContext } from "react";
import { Countercontext } from "../context/Countercontext";
const useCounterContext = () => {
        const context = useContext(Countercontext)

        if(!context){
            console.log('Ocorreu um erro');
        }

        return context
}

export default useCounterContext

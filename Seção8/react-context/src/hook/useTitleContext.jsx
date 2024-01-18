import { useContext } from "react";
import { TitleColorContext} from "../context/TitleColorContext";

const useTiteleContext = () => {
    const context = useContext(TitleColorContext)

    if (!context){
        console.log('Ocorreu um erro');
    }

    return context
}

export default useTiteleContext

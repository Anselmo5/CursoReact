import { useContext } from "react";
import { TitleColorContext, TitlecolorReducer } from "../context/TiteleColorContext";

const useTiteleContext = () => {
    const context = useContext(TitleColorContext)

    if (!context){
        console.log('Ocorreu um erro');
    }

    return context
}

export default useTiteleContext

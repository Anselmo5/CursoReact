//contexto para autenticação e função que retorna o authcontext.

import { useContext, createContext} from "react";

const AuthContext = createContext()

export function AuthContextProvider({children,value}) {
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
} 


export function useAuthValue(){
    return useContext(AuthContext)
}
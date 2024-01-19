import { db } from '../firebase/config'

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth' //função que vem direto do firebase para autenticação e outras coisas

import { useState,useEffect } from 'react'

export const useAutentiction = () =>{
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)
    // tratamento de memoria, evitando que acha vazemnto da memoria, por alguma função ou algo do genero.

    const [cancelled, setCancelled] = useState(false)
     function chekIfIsCancelled (){
        if(cancelled){
            return
        }
     }

     const auth = getAuth() //Autenticação 


     const createUser = async (data) =>{
        chekIfIsCancelled();

        setLoading(true)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user,{
                displayName:data.displayName,
            });

            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message); 
            
            let systemErrorMenssege;
            if (error.message.includes("Password")){
                systemErrorMenssege = "A senha precisa conter pelo menos 6 caracteres.";
    
            }else if (error.message.includes("email-already")){
                systemErrorMenssege = "E-mail já cadastrado.";
            }else{
                systemErrorMenssege = "Ocorreum erro, por favor tente mais tarde."
            }
    
            setError(systemErrorMenssege)
        }

        setLoading(false) 
     };

    

     useEffect(() =>{
        return () => setCancelled(true);
     },[])

     return{
        auth,
        createUser,
        error,
        loading
     }
}
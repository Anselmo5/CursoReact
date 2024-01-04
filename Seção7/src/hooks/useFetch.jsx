import { useState,useEffect } from "react";

// a pasta hooks serve para divirmos as responsabilidades.
//uma função por exemplo que estava dentro de uma pasta pode ser realocada para uma pasta hooks tornaldo o ambiente mais limpo
export const useFecth = (url) =>{

    const [data,setData] = useState(null)
    const [config,setConfig] = useState(null) // configuração da requisição
    const [method, setMethod] =useState(null) // get, post - o metodo da requisição 'q
    const [callFecth,setCallFecth] =useState(false) // busca os dados atualizados
    const [loading, setLoading] =useState(false)
    const [error, setErro] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
          setConfig({
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          setMethod("POST");

        }
    }

    useEffect(()=> {
        const fecthData = async () =>{
            setLoading(true) 
      try {
        const res = await fetch(url)
        const json =  await res.json()
        setData(json)
      } catch (error) {
        setErro('Houve um erro no carregamento')
      }

      setLoading(false)
        }
        fecthData()

    },[url,callFecth])   
    
    useEffect(() =>{
        const httpRequest = async () =>{
        if (method === "POST"){
            let fecthOptions = [url,config];
            const res = await fetch(...fecthOptions)
            const json = await res.json();

            setCallFecth(json);
        };
     }
        httpRequest();
    },[config,method,url])


    
    return{ data,httpConfig,loading,error};
}
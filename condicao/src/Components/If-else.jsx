import { useState } from "react"

const ifelse = () =>{
    const [nome,setNome] = useState()
    return(
        <div>
            <h1> if Ternario</h1>
            {nome === "João" ? (
                <div>
                    <p>nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )};

            <button onClick={()=> setNome("Henrique")}>Altere</button>
        </div>
    )
}

export default ifelse;
import { useState } from "react"

const Limpezaformulario = ({user}) => {

const [ganch,setGanch] = useState(user ? user.name : "")
const [email,setEmail] = useState(user ? user.email : "")

const handleemail = (event) =>{
    setEmail(event.target.value)
}

const handelername = (event) => {
setGanch(event.target.value)
}

const handleSubmit = (evento) =>{
    evento.preventDefault();
    console.log("Enviando formilario");
    console.log(ganch,email);
 // limpeza form
    setEmail("");
    setGanch("");
};


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text"  name="name" placeholder="digiter um nome" onChange={handelername} value={user.name} /> 
            <input type="email" name="name" placeholder="Digite o seu Email" onChange={handleemail} value={user.email}/>
            <input type="submit" value="Enviar"/> 
            
      </form>
    </div>
  )
}

export default Limpezaformulario

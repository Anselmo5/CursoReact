import { useState } from "react"

const Envioforms = () => {

const [ganch,setganch] = useState("")
const [email,setemail] = useState("")

const handleemail = (event) =>{
    setemail(event.target.value)
}

const handelername = (event) => {
setganch(event.target.value)

}

const handleSubmit = (evento) =>{
    evento.preventDefault();
    console.log("Enviando formilario");
    console.log(ganch,email);
    
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text"  name="name" placeholder="digiter um nome" onChange={handelername}/> 
            <input type="email" name="name" placeholder="Digite o seu Email" onChange={handleemail}/>
            <input type="submit" value="Enviar"/> 
            
      </form>
    </div>
  )
}

export default Envioforms

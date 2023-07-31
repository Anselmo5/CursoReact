import { useState } from "react"
import styles from "./Myform.module.css"

const Controllerdinputs = ({user}) => {

 const [nome,setnome] = useState(user ? user.nome : "") 
 const [ganch, setganch] = useState(user ? user.email : "")


console.log(ganch); 

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="name">Nome:</label>
        <input type="text"  name="name" placeholder="Digiter um nome" value={user.name}/>
        <input type="email" name="name" placeholder="Digite o email" value={user.email}/>
        <input type="submit" value="Enviar" className={styles.input}/> 
      </form>
    </div>
  )
}

export default Controllerdinputs;

import { useState } from "react"
import styles from "./Myform.module.css"

const Myform = () => {

 const [nome,setnome] = useState("Anselmo") //Gerenciamento de dados de um input
 const [ganch, setganch] = useState("")


 const handelername = (e) => {
  setganch(e.target.value) //definimos o elemento dentro do input que queremos pegar
 }
console.log(ganch); // podemos ver o elemento dentro do input

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="name">Nome:{nome}</label>
        <input type="text"  name="name" placeholder="digiter um nome" onChange={handelername}/> {/*onChange e um evento que acontece quando uma tecla e precionada dentro do input */}
        <input type="submit" value="Enviar" className={styles.input} onClick={() => setnome("Gabriel")}/> 
      </form>
    </div>
  )
}

export default Myform

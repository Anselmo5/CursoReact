import { useState } from "react"
import styles from "./Myform.module.css"

const Myform = () => {

 const [nome,setnome] = useState("Anselmo")

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="name">Nome:{nome}</label>
        <input type="text"  name="name" placeholder="digiter um nome"/>
        <input type="submit" value="Enviar" className={styles.input} onClick={() => setnome("Gabriel")}/> 
      </form>
    </div>
  )
}

export default Myform

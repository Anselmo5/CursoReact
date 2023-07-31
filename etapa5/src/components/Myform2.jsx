import { useState } from "react"
import styles from "./Myform2.module.css"

const Myform2 = () => {

  const [email,setemail] =useState("")

  console.log(email)
  return (
    <div  className={styles.aling}>
      {/* Label envolvendo o input, onde aqui não temos o htmlfor que fazia o nosso link ncomo input*/}
      <label className={styles.form}> 
        <span>Nome:</span> {/*state inline */} {/* Aqui temos um codigo mais simplificado de gerenciamento de dados dentro de um input, onde não foi utilizamos uma função para puchar os dados, mas sim incerindo direto na tag */}
        {/* Que se torna mais simples, para ocasioes onde você precisa pegar os dados */}
        <input type="Nome"placeholder="digite o seu nome"  className={styles.input} onChange={(e) => setemail(e.target.value)}/>
        <input type="email"placeholder="digite o email"  className={styles.input}/>
        <input type="submit" value="enviar"  className={styles.input}/>
      </label>
    </div>
  )
}

export default Myform2

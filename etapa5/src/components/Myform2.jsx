import styles from "./Myform2.module.css"

const Myform2 = () => {
  return (
    <div  className={styles.aling}>
      {/* Label envolvendo o input, onde aqui não temos o htmlfor que fazia o nosso link ncomo input*/}
      <label className={styles.form}> 
        <span>Nome:</span>
        <input type="Nome"placeholder="digite o seu nome"  className={styles.input}/>
        <input type="email"placeholder="digite o email"  className={styles.input}/>
        <input type="submit" value="enviar"  className={styles.input}/>
      </label>
    </div>
  )
}

export default Myform2

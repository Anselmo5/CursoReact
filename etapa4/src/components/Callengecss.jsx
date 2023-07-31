import styles from "./Challengecss.module.css"
const Challengecss = ({cor,rodas,marca}) => {
 
  return (
    <div>
      <h2 className={styles.test}>Desafio Array de carros</h2>
      <p className={styles.text}>essa e a cor: {cor}</p>
      <p className={styles.text}> essa e a quantidade de rodas {rodas}</p>
      <p className={styles.text}> essa e a marga dos carros: {marca} </p>
    </div>
  )
}

export default Challengecss

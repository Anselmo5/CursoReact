import styles from "./Titele.module.css"
const Titele = () => {
  return (
    <div>
    <h2 className={styles.my_teste} > O teste do modules css</h2>
     {/* O modele css serve como se fosse um id unico de estilo, se tentarmos colocar o mesmo estilo em qualquer outra pagina não irar renderizar, pelo fato do module atuar como um id unico, onde nem mesmo o global css alterara esse codigo */}
    </div>
  )
}

export default Titele

import React from 'react'
import styles from './Registro.module.css'

const Registro = () => {
  return (
    <div className={styles.registro}>
      <h1>Crie sua conta</h1>
      <p> compartilhe suas histórias atraveis dos seus Posts</p>
      <form >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
          />
        </label>
         <button className="btn">Entrar</button>
      </form>
    </div>

  )
}

export default Registro

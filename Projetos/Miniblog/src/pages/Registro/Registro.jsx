import React from 'react'
import styles from './Registro.module.css'
import { useState, useEffect } from 'react'
import { useAutentiction } from '../../hooks/useAutentiction'

const Registro = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmePassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const {createUser,error:authError,loading,auth} = useAutentiction();
  const handsubmit = async(event) =>{
    event.preventDefault();

    setError("") //zerando todos os erros

    const user ={ //parametros do usuario
      displayName,
      email,
      password
    }
    if(password !== confirmePassword){
      setError("As duas senhas precisam ser iguais")
      return
    }
    const res = await createUser(user)

    console.log(res);
  }

  useEffect(() =>{
    if(authError){
      setError(authError)
    }
  },[authError])

  return (
    <div className={styles.registro}>
      <h1>Crie sua conta</h1>
      <p> compartilhe suas histórias atraveis dos seus Posts</p>
      <form onSubmit={handsubmit} >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            value={confirmePassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
         <button className="btn">Entrar</button>
         {error && <p className='error'> {error}</p>}
      </form>
    </div>

  )
}

export default Registro

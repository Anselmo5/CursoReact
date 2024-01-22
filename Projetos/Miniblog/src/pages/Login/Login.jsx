import React, { useState,useEffect } from 'react'
import styles from './Login.module.css'
import { useAutentiction } from '../../hooks/useAutentiction';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const {login,error:authError,loading,auth} = useAutentiction();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);


  return (
    <div className={styles.Login}>
         <h1>Crie sua conta</h1>
      <p> compartilhe suas histórias atraveis dos seus Posts</p>
      <form onSubmit={handleSubmit} >
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
         <button className="btn">Entrar</button>
         {error && <p className='error'> {error}</p>}
      </form>
    </div>
  )
}
  
export default Login

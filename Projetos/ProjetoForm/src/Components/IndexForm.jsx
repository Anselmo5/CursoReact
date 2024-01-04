import React, { useState } from 'react'
import "./IndexForm.css"

const IndexForm = () => {

const [nome,setnome] = useState()
const [email,setemail] =useState()

const hendel =( event) =>{
 setnome(event.target.value)
 console.log(nome);
}

const handlsub =(event) =>{
  setemail(event.target.value)
  console.log(email);
}

const handelsubmit = (evento) =>{
  evento.preventDefault();
  alert("O Formulario Foi Enviado")
  setemail("")
  setnome("")
  
  
}

  return (
    <div>
      <form className='aling forms' onSubmit={handelsubmit}>
            <label htmlFor="" className='alinglabel'>Login</label>
            <label htmlFor="name" className='alinglabel'>Nome</label>
            <input type="text" name='name' placeholder='Digite o seu nome' className='alinginp' onChange={hendel} value={nome}/>
            <label htmlFor="email" className='alinglabel'>Gmail</label>
            <input type="email" name='email' placeholder='Digite o seu email' className='alinginp' onChange={handlsub} value={email}/>
            <input type="submit" value="Cadastrar" className='alingbtn'/>
      </form>
    </div>
  )
}

export default IndexForm

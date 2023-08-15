import React, { useState } from 'react'

const Textearea = () => {
    const [bio,setbio] = useState()
    const [nome,setnome] = useState()
    const [email,setemail] =useState()

    const hendel = (event) =>{
        setnome(event.target.value)
        console.log(nome);
    }

    const handlsub =(event) =>{
        setemail(event.target.value)
        console.log(email);
    }

    const handsumet = (event) =>{
        setbio(event.target.value)
        console.log(bio);
    }

    const handelherSubmit = (event) =>{
        event.preventDefault();
        alert("O Formulario Foi Enviado")
        setemail("")
        setnome("")
        setbio("")
        console.log(nome,email,bio);
    }

  return (

    <div>
        <form className='aling forms' onSubmit={handelherSubmit}>
            <label htmlFor="" className='alinglabel'>Login</label>
            <label htmlFor="name" className='alinglabel'>Nome</label>
            <input type="text" name='name' placeholder='Digite o seu nome' className='alinginp' onChange={hendel} value={nome}/>
            <label htmlFor="email" className='alinglabel'>Gmail</label>
            <input type="email" name='email' placeholder='Digite o seu email' className='alinginp' onChange={handlsub} value={email}/>
            <textarea name="bio" placeholder='Informações do usuario' onChange={(event)=> setbio(event.target.value)} value={bio}></textarea>
            <input type="submit" value="Cadastrar" className='alingbtn'/>
        </form>

    </div>
  )
}

export default Textearea
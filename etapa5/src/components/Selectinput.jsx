import React from 'react'
import { useState } from 'react'

const Selectinput = ({user}) => {
    
    const [bio,setbio] = useState(user ? user.bio : "")
    const [nome,setnome] = useState(user ? user.nome : "")
    const [email,setemail] =useState(user ? user.email : "")
    const [role,setrole] = useState(user ? user.role:"")

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
        setrole("")
        console.log(nome,email,bio,role);
    }


  return (
    <div>
        <form className='aling forms' onSubmit={handelherSubmit}>
            <label htmlFor="" className='alinglabel'>Login</label>
            <label htmlFor="name" className='alinglabel'>Nome</label>
            <input type="text" name='name' placeholder='Digite o seu nome' className='alinginp' onChange={hendel} value={nome}/>
            <label htmlFor="email" className='alinglabel'>Gmail</label>
            <input type="email" name='email' placeholder='Digite o seu email' className='alinginp' onChange={handlsub} value={email}/>
            <textarea name="bio" placeholder='Informações do usuario' onChange={(event)=> setbio(event.target.value)} value={bio}></textarea> {/* A tag textarea e como se fosse um input text normal, mas com um tamanho mais amplo para textos maiores*/}
            <input type="submit" value="Cadastrar" className='alingbtn'/>

        <select name="role" onChange={(event) => setbio(event.target.value)} value={role}> {/* O input select e um input que nos da uma oportunidade de fazer selects(escolhas) dentro de algum forme por exemplo*/}
            <option value=""></option>
            <option value="admin">Administrador</option>
            <option value="Developer"> Desenvolverdor</option>
            <option value="Pedreiro">servente</option>
        </select>
        </form>
    </div>
  )
}

export default Selectinput
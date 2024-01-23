import React from 'react'
  import { useState } from 'react'
  import {useNavigate} from 'react-router-dom';
  import { useAuthValue } from '../../context/AuthContext';
  import styles from './Createpost.module.css'
  import { useInsertDocument } from '../../hooks/useInsertDocument';
const Createpost = () => {
  const [title,setTitle] =useState("")
  const [imege,setImege] =useState("")
  const [body,setBody] =useState("")
  const [tags,setTags] =useState([])
  const [formError,setFormError] =useState("")
  const {user} = useAuthValue()
    const {insertDocument,response} = useInsertDocument("posts")

  const  handsubmit = (e) =>{
    e.preventDefault();


    insertDocument({
        title,
        imege,
        tags,
        body,
        udi:user.udi,
        createdBy: user.displayName,  
    })
  }
  return (
    <div className={styles.Post}>
      <h2>Criar Post</h2>
      <p>Compartilhe seuas historias,memorias,atraves dos seus posts</p>
      <form onSubmit={handsubmit}>
          <label>
            <span>Titulo:</span>
            <input 
              type="text" 
              required 
              placeholder='Seja criativo em seu titulo'
              name='titulo'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
          </label>

          
          <label>
            <span>Tags:</span>
            <input 
              type="text" 
              required 
              placeholder='Separe as tags por virgula'
              name='tags'
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              />
          </label>


          <label>
            <span>Url da imagem:</span>
            <input 
              type="text" 
              required 
              placeholder='Selecione uma imagem para seu post'
              name='imagem'
              value={imege}
              onChange={(e) => setImege(e.target.value)}
              />
          </label>

          <label>
            <span>Conteudo:</span>
              <textarea
              required 
              placeholder='Insira o conteúdo do post'
              name='body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              ></textarea>
          </label>
          {!response.loading && <button className="btn">Criar Post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  )
}

export default Createpost
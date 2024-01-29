  import styles from './Createpost.module.css'


  import { useState } from 'react'
  import {useNavigate} from 'react-router-dom';
  import { useAuthValue } from '../../context/AuthContext';
  import { useInsertDocument } from '../../hooks/useInsertDocument';
const Createpost = () => {
  const [title,setTitle] =useState("")
  const [image,setImage] =useState("")
  const [body,setBody] =useState("")
  const [tags,setTags] =useState([])
  const [formError,setFormError] =useState("")

  const {user} = useAuthValue()
  const navigate = useNavigate();
  const { insertDocument,response} = useInsertDocument("posts")

  const  handsubmit = (e) =>{
    e.preventDefault();
    setFormError("")


    // Validação dos dados
    // Url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    } 

      // array de tags
      const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());


      // chegando todos os valores

      if (!title || !image || !tags || !body) {
        setFormError("Por favor, preencha todos os campos!");
      }


    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });


       if(formError) return;  

    insertDocument({
        title,
        image,
        tags: tagsArray,
        body,
        uid:user.uid,
        createdBy: user.displayName,  
    });

    navigate("/")
  };

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
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
              />
          </label>

          
          <label>
            <span>Tags:</span>
            <input 
              type="text" 
              required 
              placeholder='Separe as tags por virgula'
              name='tags'
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              />
          </label>


          <label>
            <span>Url da imagem:</span>
            <input 
              type="text" 
              required 
              placeholder='Selecione uma imagem para seu post'
              name='imagem'
              onChange={(e) => setImage(e.target.value)}
              value={image}
              />
          </label>

          <label>
            <span>Conteudo:</span>
              <textarea
              required 
              placeholder='Insira o conteúdo do post'
              name='body'
              onChange={(e) => setBody(e.target.value)}
              value={body}
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

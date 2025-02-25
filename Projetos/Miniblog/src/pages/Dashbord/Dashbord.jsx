import styles from './Dashbord.module.css'
import {Link} from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { useDelete } from '../../hooks/useDelete';

const Dashbord = () => {
  const {user} = useAuthValue()
  const uid = user.uid;


  const {documents:posts,loading} =useFetchDocuments("posts",null,uid)

  const {deleteDocument} = useDelete("posts")

   return (
    <div className={styles.dashboard}>
      <h2>Dashbord</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ?(
        <div className={styles.noposts}> 
        <p>Não foram encontrados posts</p>
          <Link to="/post/create" className='btn'>
            Criar primeiro post
          </Link>
        </div>
      ) : (
      
      <>
      <div className={styles.post_header}>
        <span>Titulo</span>
        <span>Ações</span>
      </div> 
      
    {posts && posts.map((post) => (
        <div className={styles.post_row}
        key={post.id}>
          <p>{post.title}</p>
          <div className={styles.actions}>
            <Link to={`/post/${post.id}`} className='btn btn-outline'>
              Ver
            </Link>

            <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>
              Editar
            </Link>

          <button className='btn btn-outline btn-danger' onClick={() => deleteDocument(post.id)}>
            Excluir
          </button>
          </div>
        </div>
    ))}
    
      </> 
      )}
    </div>
  )
}

export default Dashbord

import React from 'react'
import styles from './Home.module.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import PostDetail from '../../components/PostDetail'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
const Home = () => {

  const [query,setQuery] = useState()
  const {documents:posts,loadig} = useFetchDocuments('posts')
  const navigate = useNavigate()
  const handlesubmit = (e) =>{
     e.preventDefault()

     if (query){
      return navigate(`/search?q=${query}`)
     }
  }
  return (
    <div className={styles.home}>
      <h2> Veja os nossos posts mais recentes</h2>
      <form onSubmit={handlesubmit} className={styles.search_form}>
        <input 
          type="text" 
          placeholder='Ou busque por tags'
          onChange={(e) => setQuery( e.target.value)}
          />
          <button className='btn btn-dark'>Pesquisar</button>
      </form>
        <div>
            {loadig&& <p>Carregando...</p>}
            {posts && posts.length === 0 &&(
                <div className={styles.noposts}>
                    <p>Não foram encontrados posts</p>
                     <Link to="/posts/create" className='btn'>
                      Criar primeiro post
                      </Link>
                </div>
            )}
             {posts && posts.map((post)=> <PostDetail key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default Home

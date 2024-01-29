import styles from'./Search.module.css'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'


const Search = () => {
    const query = useQuery();
    const search = query.get("q")
    const {documents:posts,loadig} = useFetchDocuments('posts',search)

  return (
    <div>
        <h2>Search</h2>
        <div className={styles.search_container}>
            {loadig&& <p>Carregando...</p>}
            {posts && posts.length === 0 &&(
                <div>
                    <p>Os dados da sua pesquisa não foram encontrados...</p>
                     <Link to="/" className='btn btn-dark'>
                        Voltar
                      </Link>
                </div>
            )}
             {posts && posts.map((post)=> <PostDetail key={post.id} post={post}/>)}
        </div>

    </div>
  )
}

export default Search

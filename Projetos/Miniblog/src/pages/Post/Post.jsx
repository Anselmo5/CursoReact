import React from 'react'
import styles from './Post.module.css'
import { useParams } from 'react-router-dom'
import { useFecthPostDocument } from '../../hooks/useFecthPostDocument'
const Post = () => {
    const {id} = useParams()
    const {document:post,loading} = useFecthPostDocument("posts",id)
  return (

    <div className={styles.post_container}>
      {loading && <p>Carregando Post</p>}
        { post &&
          <>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <h3>Este post trata sobre:</h3>
            <div className={styles.tags}>
            {post.tags.map((tag) =>(
                <p key={tag}>
                    <span>#</span>
                    {tag}
                </p>
            ))}

            </div>

          </>
        }
    </div>
  )
}

export default Post

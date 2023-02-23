import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import reactlogo from '../../assets/react-logo.png'
import { AjaxRequest } from '../../helpers/AjaxRequest';
import { Global } from '../../helpers/Global';
import { PostList } from './PostList';


export const Post = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true)
  const params = useParams();

  useEffect(() => {
    getDataPost()
  }, [])

  const getDataPost = async () => {
    let url = Global.url + 'Post/' + params.id;
    //Llama al helper para hacer la peticion
    let { data, loading } = await AjaxRequest(url, 'GET')

    // console.log(data)

    if (data.status === 'succes') {
      // console.log(data.post.length)
      setPost(data.post)
    } else {
      setPost(null)
    }
    setLoading(false)
  }


  return (
    <>
      {loading ? ("Loading...") : (post !== null ? (
        <div className='jumbo-post'>
          <h1>{post.title}</h1>
          <span>{post.date}</span>
          <p>{post.content}</p>
          <div className='mask-post'>
            {post.image == 'default.png' ? (<img src={reactlogo} alt='React logo' />) :
              (<img src={Global.url + 'image/' + post.image} alt='React logo' />)}

          </div>
        </div>
      ) : (
        <h1>This post is not longer up.</h1>
      )
      )}

    </>
  )
}

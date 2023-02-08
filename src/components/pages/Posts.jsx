import React, { useEffect, useState } from 'react'
import reactlogo from '../../assets/react-logo.png'
import { AjaxRequest } from '../../helpers/AjaxRequest';
import { Global } from '../../helpers/Global';
import { PostList } from './PostList';


export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let url = Global.url + '/getPosts'
    //Llama al helper para hacer la peticion
    let { data, loading } = await AjaxRequest(url, 'GET')

    console.log(data)

    if (data.status === 'succes') {
      setPosts(data.posts)
    }
    setLoading(false)
  }


  return (
    <>
      {loading ? ("Loading...") : (posts.length >= 1 ? (
        <PostList posts={posts} setPosts={setPosts} />
      ) : (
        <h1>No hay posts</h1>
      )
      )}




    </>
  )
}

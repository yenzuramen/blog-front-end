import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import reactlogo from '../../assets/react-logo.png'
import { AjaxRequest } from '../../helpers/AjaxRequest';
import { Global } from '../../helpers/Global';
import { PostList } from './PostList';


export const Search = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  const params = useParams();


  useEffect(() => {
    getData()
    console.log(params.search);
  }, [])

  
  useEffect(() => {
    getData()
    console.log(params.search);
  }, [params.search])



  const getData = async () => {


    let url = Global.url + 'search/' + params.search
    //Llama al helper para hacer la peticion
    let { data, loading } = await AjaxRequest(url, 'GET')

    console.log(data)

    if (data.status === 'succes') {
      setPosts(data.foundItems)
    }else{
      setPosts([])
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

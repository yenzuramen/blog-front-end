import React from 'react'
import reactlogo from '../../assets/react-logo.png'
import { AjaxRequest } from '../../helpers/AjaxRequest'
import { Global } from '../../helpers/Global'


export const PostList = ({ posts, setPosts }) => {

  const deletePost = async (id) => {

    // alert(id)

    let { data } = await AjaxRequest(Global.url + 'Post/' + id, 'DELETE')

    if (data.status == 'succes') {
      console.log(data)
      let updatedList = posts.filter((post) => post._id !== id)
      setPosts(updatedList)
      // setPosts(data.posts)
    }
    console.log(data);

  }

  return (
    posts.map((post) => {
      return (
        <article key={post._id} className="post-item" >
          <div className='mask'>
            {post.image == 'default.png' ? (<img src={reactlogo} alt='React logo' />) :
              (<img src={Global.url + 'image/' + post.image} alt='React logo' />)}

          </div>
          <div className='data-cont'>
            <h3 className="title">{post.title}</h3>
            <p className="description">{post.content}</p>
            {/* <pre>{JSON.stringify(posts)}</pre> */}
            <div className='btns'>
              <button className="edit">Editar</button>
              <button className="delete" onClick={() => { deletePost(post._id) }}>Borrar</button>
            </div>

          </div>

        </article>
      )
    })
  )
}

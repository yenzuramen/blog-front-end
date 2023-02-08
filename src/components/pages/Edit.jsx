import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AjaxRequest } from '../../helpers/AjaxRequest'
import { Global } from '../../helpers/Global'
import { useSerializeForm } from '../../hooks/useSerializeForm'
import reactlogo from '../../assets/react-logo.png'


export const Edit = () => {

  const [post, setPost] = useState([]);
  const { form, sendForm, changeObj } = useSerializeForm({})
  const [result, setResult] = useState('')
  const params = useParams()

  useEffect(() => {
    getDataPost()
  }, [])

  const getDataPost = async () => {
    //url para llamar al endpoint del api
    let url = Global.url + 'Post/' + params.id;
    //Llama al helper para hacer la peticion
    let { data } = await AjaxRequest(url, 'GET')

    console.log(data)

    if (data.status === 'succes') {
      setPost(data.post)
    } else {
      setPost(null)
    }
  }

  const EditPost = async (e) => {

    e.preventDefault()
    let newPost = form
    console.log(newPost)

    //Ajax request to save on backend
    let { data } = await AjaxRequest(Global.url + 'post/' + params.id, 'PUT', newPost)
    console.log(data)

    if (data.status == 'succes') {
      setResult('Post Saved!')
      let fileInput = document.querySelector('#fileInput')

      console.log(fileInput.files)

      if (fileInput.files.length !== 0) { //Si hay imagenes para guardar
        const formData = new FormData();
        formData.append('file0', fileInput.files[0])

        let dataImg = await AjaxRequest(Global.url + 'upload-img/' + params.id,
          'POST', formData, true)

        console.log(dataImg.data)

        if (dataImg.data.status == 'succes') {
          setResult('Post Saved!')
        } else {
          setResult("There's been an error")

        }
      }


    } else {
      setResult("There's been an error")
    }

  }

  return (
    <div className='jumbo' onSubmit={EditPost}>
      <h2>Edit Post: {post.title}</h2>
      <p>Edit your post</p>
      <pre>{JSON.stringify(form)}</pre>
      <strong>{result}</strong>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' placeholder='Title of the Post' onChange={changeObj} defaultValue={post.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea type='text' name='content' placeholder='Content...' onChange={changeObj} defaultValue={post.content} />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image</label>
          <div className='mask'>
            {post.image == 'default.png' ? (<img src={reactlogo} alt='React logo' />) :
              (<img src={Global.url + 'image/' + post.image} alt='React logo' />)}
          </div>
          <input type='file' name='file0' id='fileInput' />
        </div>

        <input className='btn' type='submit' value='Create Post' />
      </form>
    </div>
  )
}

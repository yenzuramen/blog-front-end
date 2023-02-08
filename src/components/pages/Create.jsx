import React, { useState } from 'react'
import { AjaxRequest } from '../../helpers/AjaxRequest'
import { Global } from '../../helpers/Global'
import { useSerializeForm } from '../../hooks/useSerializeForm'




export const Create = () => {

  const { form, sendForm, changeObj } = useSerializeForm({})
  const [result, setResult] = useState('')

  const savePost = async (e) => {
    e.preventDefault()
    let newPost = form
    console.log(newPost)

    //Ajax request to save on backend
    let { data } = await AjaxRequest(Global.url + 'save', 'POST', newPost)
    console.log(data)
    if (data.status == 'succes') {
      setResult('Post Saved!')
      let fileInput = document.querySelector('#fileInput')
      console.log(fileInput.files)

      if (fileInput.files.length !== 0) { //Si hay imagenes para guardar
        const formData = new FormData();
        formData.append('file0', fileInput.files[0])

        let dataImg = await AjaxRequest(Global.url + 'upload-img/' + data.post._id,
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
    <div className='jumbo' onSubmit={savePost}>
      <h2>Create Post</h2>
      <p>Post something</p>
      <pre>{JSON.stringify(form)}</pre>
      <strong>{result}</strong>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' placeholder='Title of the Post' onChange={changeObj} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea type='text' name='content' placeholder='Content...' onChange={changeObj} />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image</label>
          <input type='file' name='file0' id='fileInput' />
        </div>
        <input className='btn' type='submit' value='Create Post' />
      </form>
    </div>
  )
}

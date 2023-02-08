import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const SideBar = () => {

  const [search, setSearch] = useState('')
  const navigator = useNavigate()

  const makeSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search_field.value)
    let userSearch = e.target.search_field.value;

    navigator('/search/' + userSearch, { replace: true })
  }



  return (
    <aside className="lateral">
      {/* BUSCADOR */}

      <div className="search">
        <h3 className="title">Buscador</h3>
        {/* {(notFound && search.length > 1) && (<span className='no-encontrado'> Not movies found </span>)} */}

        <form onSubmit={makeSearch}>
          <input type="text" id="search_field" name='search_field' autoComplete='off' />
          <input type='submit' id="search" value='Search' />
        </form>
      </div>

      {/* <div className="add">
        <h3 className="title"></h3>
        <form >
          <input type="text" id="titulo" placeholder="titulo" />
          <textarea id="desc" placeholder="Descripción"></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div> */}


    </aside>

  )
}

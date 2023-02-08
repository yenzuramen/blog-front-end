import React from 'react'

export const SideBar = () => {
  return (
    <aside className="lateral">
      {/* BUSCADOR */}

      <div className="search">
        <h3 className="title">Buscador</h3>
        {/* {(notFound && search.length > 1) && (<span className='no-encontrado'> Not movies found </span>)} */}

        <form>
          <input type="text" id="search_field" name='search_field' autoComplete='off' />
          <button id="search">Buscar</button>
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

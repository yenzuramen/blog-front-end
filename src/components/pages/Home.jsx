import React from 'react'
import { Link } from 'react-router-dom'
import { Edit } from './Edit'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Welcome to this blog made in react</h1>
      <p>Blog made as a practice with MERN Stack</p>
      <Link to='/posts' className='button'>Go to Posts</Link>
    </div>
  )
}

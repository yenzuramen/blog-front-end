import { useState } from 'react'

import { Create } from './components/pages/Create'
import { Home } from './components/pages/Home'
import { Posts } from './components/pages/Posts'
import { Routing } from './routing/Routing'

function App() {

  return (
    <div className="layout">
     <Routing/>
    </div>
  )
}

export default App

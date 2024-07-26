import React from 'react'
import NavMenu from './components/navMenu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <NavMenu/>
      <hr />
      <div className="app-container">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App

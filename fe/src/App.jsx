import React from 'react'
import NavMenu from './components/navMenu/NavMenu'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'





const App = () => {
  return (
    <div className='app'>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<Home/>} />

      </Routes>
    </div>
  )
}

export default App

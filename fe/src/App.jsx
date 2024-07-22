import React from 'react'
import NavMenu from './components/navMenu/NavMenu'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Footer from './components/footer/Footer'





const App = () => {
  return (
    <>
      <div className='app'>
        <NavMenu/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

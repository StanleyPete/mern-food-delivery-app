import React, { useState } from 'react'
import NavMenu from './components/navMenu/NavMenu'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import LogInPopUp from './components/logInSignUpPopUp/LogInPopUp'
import SignUpPopUp from './components/logInSignUpPopUp/SignUpPopUp'






const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
    {showLogin ? <LogInPopUp setShowLogin={setShowLogin}/> : <></>}
    {showSignUp ? <SignUpPopUp setShowSignUp={setShowSignUp}/> : <></>}
      <div className='app'>
        <NavMenu setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

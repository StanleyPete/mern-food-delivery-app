import React, { useState } from 'react'
import NavMenu from './components/navMenu/NavMenu'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import LogInPopUp from './components/logInSignUpPopUp/LogInPopUp'
import SignUpPopUp from './components/logInSignUpPopUp/SignUpPopUp'
import Basket from './pages/basket/Basket'
import Checkout from './pages/checkout/Checkout'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myOrders/MyOrders'



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
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>

        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './logInSignUpPopUp.css'
import { assets } from '../../assets/assets';

const SignUpPopUp = ({setShowSignUp}) => {
    const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="sign-in-up">
      <form className="sign-in-up-container">
        <div className="sign-in-up-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowSignUp(false)} src={assets.cross_icon} alt="Exit image" />
        </div>
        <div className="sign-in-up-inputs">
            {currState==="Sign up" ? <input type="text" placeholder="Username" required/> : <></> }
            <input type="email" placeholder="E-mail address" required />
            <input type="password" placeholder="Password" required/>
        </div>
        <button>{currState==="Sign up" ? "Create account" : "Log in"}</button>
        <div className="sign-in-up-terms">
            <input type="checkbox" required/>
            <p>I agree to the terms of use and privacy policy</p>
        </div>
        {currState==="Sign up"
        ? <p>Already have and account? <span onClick={()=>setCurrState("Log in")}>Log in here</span></p>
        : <p>Create new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
        }
      </form>
    </div>
  )
}

export default SignUpPopUp

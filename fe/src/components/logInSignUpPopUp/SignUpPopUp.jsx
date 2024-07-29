import React, { useState, useContext } from 'react'
import './logInSignUpPopUp.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const SignUpPopUp = ({setShowSignUp}) => {

    const [currState, setCurrState] = useState("Sign up");

    const {url, setToken} = useContext(StoreContext)

    const [data, setData] = useState({
      name: "",
      email: "",
      password: ""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setData(data => ({...data, [name]: value}));
    }

    // useEffect(() => {
    //   console.log(data);
    // },[data])

    const onLogin = async (event) => {
      event.preventDefault();
      let newUrl = url
      if (currState === "Log in"){
        newUrl += "/api/user/login"
      } else {
        newUrl += "/api/user/signup"
      }

      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowSignUp(false);
      } else {
        alert(response.data.message);
      }
    }
  return (
    <div className="sign-in-up">
      <form onSubmit={onLogin} className="sign-in-up-container">
        <div className="sign-in-up-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowSignUp(false)} src={assets.cross_icon} alt="Exit image" />
        </div>
        <div className="sign-in-up-inputs">
            {currState==="Sign up" ? <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Username" required/> : <></> }
            <input name="email" onChange={onChangeHandler} value={data.email}  type="email" placeholder="E-mail address" required />
            <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>
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

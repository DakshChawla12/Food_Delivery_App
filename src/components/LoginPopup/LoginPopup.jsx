import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState('Login');

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>

                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={()=> setShowLogin(false)}/>
                </div>

                <div className="login-popup-input">
                    {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                    <input type="email" placeholder='Your email' required/>
                    <input type="password" placeholder='password' required/>
                </div>

                <button>{currentState==="Sign Up"?"create account":"Login In"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing I agree to terms of use and privacy policy.</p>
                </div>

                {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>sign in here</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup

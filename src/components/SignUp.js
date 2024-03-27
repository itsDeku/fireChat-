import React from 'react'
import './signup.css'

const SignUp = () => {
  return (
    <div className="signupBody">
      <div className="signupContainer">
        <div className="signupImg">
        </div>
        <div className="signupContent">
          <img src="./firefill.svg" alt="fire logo" width={33} height={55} />
          <h1><span>Sign Up</span></h1>
          <h3>Welcome, Please signup to <br/>create your accout. </h3>
          <div className="inputbox">
            <div></div>
            <input type="text" placeholder='Email' />
          </div>
          <div className="inputbox">
            <div></div>
            <input type="password" placeholder='Password' />
          </div>
          <div className="inputbox">
            <div></div>
            <input type="password" placeholder='Repeat Password' />
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="" id="remem" />
            <label htmlFor="remem" > Remember me</label>
          </div>
          <div className="authBtn">
            <button className='SignupBtn' type="button">Signin </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
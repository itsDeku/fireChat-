import React from 'react'
import './login.css'

const LogIn = () => {
  return (
    <div className="loginBody">
      <div className="loginContainer">
        <div className="loginImg">
        </div>
        <div className="loginContent">
          <img src="./firefill.svg" alt="fire logo" width={33} height={55} />
          <h1>Let’s Make <span>friends.</span></h1>
          <h3>Welcome, Please login <br/>to your accout. </h3>
          <div className="inputbox">
            <div></div>
            <input type="text" placeholder='Email' />
          </div>
          <div className="inputbox">
            <div></div>
            <input type="password" placeholder='Password' />
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="" id="remem" />
            <label htmlFor="remem" > Remember me</label>
          </div>
          <div className="authBtn">
            <button className='LoginBtn' type="button">Login</button>
            <button className='SignupBtn' type="button">Signin </button>
          </div>
          <button className="googleSignin" type="button" >
            <img src="./bi_google.svg" alt="" width={15} height={15} />
            <span>signIn with google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogIn
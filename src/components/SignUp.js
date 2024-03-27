import './signup.css'
import app from "../firebase";
import { auth } from "../firebase";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    console.log('hello')
    try {
      // Create user with email and password
      // const auth = app.auth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: displayName 
      });
      navigate('/')
      // Redirect or perform other actions upon successful signup
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  }

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
            <input type="text" placeholder='UserName' onChange={(e)=>setDisplayName(e.target.value)}/>
          </div>
          <div className="inputbox">
            <div></div>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="inputbox">
            <div></div>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="" id="remem" />
            <label htmlFor="remem" > Remember me</label>
          </div>
          <div className="authBtn">
            <button className='SignupBtn' type="button" onClick={handleSignUp}>Create </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
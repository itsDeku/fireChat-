import './login.css'

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const navigate = useNavigate();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).
    then(r=>navigate("/")).
    catch("couldn't sign in");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
      // Redirect or perform other actions upon successful login
    } catch (error) {
      setError(error.message);
    }
  }

  const signOut = () => {
    auth.signOut();
  };

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
            <input type="text" placeholder='Email' onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="inputbox">
            <div></div>
            <input type="password" placeholder='Password'onChange={e=>setPassword(e.target.value)} />
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="" id="remem" />
            <label htmlFor="remem" > Remember me</label>
          </div>
          <div className="authBtn">
            <button className='LoginBtn' type="button" onClick={handleLogin}>Login</button>
            <button className='SignupBtn' type="button" onClick={()=>navigate('/signup')}>Signin </button>
          </div>
          <button className="googleSignin" type="button" onClick={googleSignIn} >
            <img src="./bi_google.svg" alt="" width={15} height={15} />
            <span>signIn with google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogIn
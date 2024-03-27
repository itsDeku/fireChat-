import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <div className="welcomeBox">
        <img src="./firefill.svg" alt="ReactJs logo" width={65} height={110} />
        <h2>Fire Chat</h2>
        <p>sign in to chat with the massive firechat family</p>
        <button className="welcomeSignIn" onClick={()=>navigate('/signup')}>
          Sign in 
          {/* <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          /> */}
        </button>
      </div>
    </main>
  );
};

export default Welcome;

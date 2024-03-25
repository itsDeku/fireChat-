import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <span className="brand">
      <img className="filter-white" src="firewhite.svg"></img>
      <h1>Fire Chat</h1>
      </span>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
        
      ) : (
        <button className="sign-in" onClick={googleSignIn} type="button">Log In
          {/* <img
            onClick={googleSignIn}
            src={GoogleSignin} 
            alt="sign in with google"
            type="button"
          /> */}
        </button>
      )}
      
    </nav>
  );
};

export default NavBar;

import React, { useContext, useState, useEffect } from 'react'
import app from './firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function AuthProvider({children}) {
  const auth = getAuth(app);

  var [loading, setLoading] = useState(true);

  var [error, setError] = useState(null);
  var [currentUser, setCurrentUser] = useState(null);
  var [signinError, setSigninError] = useState(null);
  var [signupError, setSignupError] = useState(null);

  // SIGN UP
  async function signup(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => {
          setSignupError(err.message)
        })
        setSignupError(null)
    } catch(err) {
        setSignupError(err.message)
    }
    
  }
  
  //SIGN IN
  async function signin(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        .catch(err => {
          setSigninError(err.message)
        })
        setSigninError(null);
    } catch(err) {
        setSigninError(err.message)
    }
    
  }
  
  //SIGN OUT
  async function signout() {
    await signOut(auth)
    console.log("signed out")
  }

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      if(currentUser !== null) console.log(currentUser.uid)
      else console.log("No user")
      return unsubscribe
    })
    // return unsubscribe
  }, [currentUser])
  
  const value = {
      currentUser,
      error,
      signinError,
      signupError,
      signin,
      signup,
      signout,
    }
  
  return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
}

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
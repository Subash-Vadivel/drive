import Header from './resources/components/Header';
import './resources/css/Login.css';
import React, { useState, useEffect } from 'react';
import fire from './fire';
import Home from './Home';
import LoginForm from './resources/components/LoginForm';
function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }



  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            console.log(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            console.log(err.message);
            break;
        }
      })
  };
  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            console.log(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            console.log(err.message);
            break;
        }
      })
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      }
      else {
        setUser("");
      }
    })
  };
  
  useEffect(() => {
    authListener();
  }, []);
  
  return (
  <>
      {
        user ? (<Home />) :
          (<LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}

          />)}
      </>
       

  );

}
export default Login;
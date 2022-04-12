import React from 'react';
import './App.css';

import Logo from './assets/logo.svg';

const Login = () => {

  const validEmail = "Test@test.com";
  const validPassword = "Test1234!";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [iseErrEmail, setIsErrEmail] = React.useState(false);
  const [iseErrPassword, setIsErrPassword] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [isCredentialErr, setIsCredentialErr] = React.useState(false);
  const [textAlert, setTextAlert] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (iseErrEmail || iseErrPassword) {
      setShowAlert(true)
      setIsCredentialErr(true)
      setTextAlert("Please try again. You have errors with your field")
    } else if (email === "" && password === "") {
      setShowAlert(true)
      setIsCredentialErr(true)
      setTextAlert("Please try again. Input field cannot be empty")
    } else {
      if (validEmail === email && validPassword === password) {
        setShowAlert(true)
        setIsCredentialErr(false)
        setTextAlert(`Welcome back ${email}`)
      } else {
        setShowAlert(true)
        setTextAlert("Please try again. Your credentials are wrong.")
        setIsCredentialErr(true)
      }
    }



  };

  const validateEmail = (v) => {
    return v.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePassword = (v) => {
    return v.length < 8;
  };


  const handleEmailChange = (e) => {

    const v = e.target.value;

    if (validateEmail(v)) {
      setIsErrEmail(false)
      setEmail(v)
    } else {
      setIsErrEmail(true)
    }

  }

  const handlePasswordChange = (e) => {

    const v = e.target.value;

    if (validatePassword(v)) {
      setIsErrPassword(true)
    } else {
      setIsErrPassword(false)
      setPassword(v)
    }

  }

  return (
    <div className='h-screen bg-cyan-800 flex'>
      <img src={require('./assets/waves.png')} className={`w-full absolute bottom-0 z-0 opacity-10`} />
      <img src={Logo} className={`absolute w-64 ml-4 mt-4`} />
      <div className='w-full max-w-sm m-auto bg-white rounded-md shadow-default py-10 px-14 z-10'>
        <h1 className='text-3xl font-bold text-primary mt-4 text-center'>
          Welcome
        </h1>
        <h5 className='font-normal text-primary mt-2 mb-2 text-center'>
          Log in to your CASEOS account!
        </h5>

        {showAlert ?
          <div className={`flex rounded ${isCredentialErr ? 'bg-red-500' : 'bg-green-500'} text-white text-sm font-bold px-4 py-3`} role="alert">
            {isCredentialErr ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg"className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            <p>{textAlert}</p>
          </div>
          :
          null
        }

        <form onSubmit={handleFormSubmit} className={`mt-6`}>
          <div className={`mb-5`}>
            <label htmlFor='text' className={`text-xs font-medium mt-10`}>Email address</label>
            <input
              type='text'
              className={`w-full p-3 ${iseErrEmail ? 'border-2 border-red-500 outline-red-500' : 'border'} rounded text-sm transition duration-150 ease-in-out`}
              id='email'
              placeholder='Type email here'
              onChange={handleEmailChange}
            />
            {iseErrEmail ?
              <span className="flex absolute items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                Invalid email format!
              </span>
              :
              null
            }
          </div>
          <div>
            <label htmlFor='password' className={`text-xs font-medium`}>Password</label>
            <input
              type='password'
              className={`w-full p-3 text-primary ${iseErrPassword ? 'border-2 border-red-500 outline-red-500' : 'border'} rounded text-sm transition duration-150 ease-in-out`}
              id='password'
              placeholder='Minimum 8 characters'
              onChange={handlePasswordChange}
            />
            {iseErrPassword ?
              <span className="flex absolute items-center font-medium tracking-wide text-red-500 text-xs mt-1">
                Password should be have minimum 8 characters
              </span>
              :
              null
            }
          </div>

          <div className='flex justify-center items-center mt-8'>
            <button
              className={`w-full bg-cyan-900 font-semibold py-3 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Log In
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Login;

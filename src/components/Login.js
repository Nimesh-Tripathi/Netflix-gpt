import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)

    const toggle = () => {
        setIsSignInForm(!isSignInForm)
    }
  
    return (
        <div>
            <Header></Header> 
            <div className='absolute'>
                <img className='w-full h-auto' src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt='logo'></img>
                <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <form className=' w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && (<input type='text' placeholder='Enter your name ' className='p-4 my-4 w-full bg-gray-700'></input>)}
                <input type='e-mail' placeholder='Enter email' className='p-4 my-4 w-full bg-gray-700'></input>
                <input type='password' placeholder='Enter password' className='p-4 my-4 w-full bg-gray-700'></input>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggle}>{isSignInForm? "New to Netflix? Sign up now." : "Already registered? Sign in now."}</p>
            </form>
        </div>
    )
}

export default Login